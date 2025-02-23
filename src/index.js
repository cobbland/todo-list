import "./styles.css";
import { Task, modifyTask, deleteTask, getTaskIndex, toggleDone, addTag, removeTag, addDate, editNote, sortTasks, addTaskToProject, removeTaskFromProject } from "./task.js";
import { Project, getProjectList } from "./project.js";
import { populateTasksFiltered, populateTasksInProject, populateTasksWithTag, noProjects, justProjects, dueToday, dueSoon, dueLater, populateTasks, expandTask, deleteTaskDOM } from "./tasks-view.js";
import { populateProjects } from "./projects-view.js";
import { populateTags, expandTag } from "./tags-view.js";

// Assign variables
const content = document.querySelector('.content');
const contentHeading = document.createElement('h2');
const contentNotes = document.createElement('div');
const taskList = document.createElement('ul');
const newTaskForm = document.querySelector('#add-task-form');
const newProjectForm = document.querySelector('#add-project-form');
const newButton = document.querySelector('.new-all');
let currentPage = '';
let currentProject = '';
let currentTag = ''; 

content.appendChild(contentHeading);
content.appendChild(contentNotes);
content.appendChild(taskList);

// Initialize tasks
const tasks = [];

// Load from local storage
if (localStorage.getItem('save')) {
    console.log('Loading local storage...')
    tasks.concat(localStorage.getItem('save'));
} else {
    console.log('No local storage.');
}

// Save to local storage
localStorage.setItem('save', JSON.stringify(tasks));

// Display tasks
currentPage = 'Tasks';
populate(tasks, taskList);

// Add content to DOM via variables and functions
function emptyDiv(div) {
    while (div.firstChild){
        div.firstChild.remove();
    }
}

function populate(tasks, taskList) {
    emptyDiv(taskList);
    newProjectForm.parentElement.style.display = 'none';
    newTaskForm.parentElement.style.display = 'none';
    newButton.style.display = "block";
    content.style.display = 'block';
    if (currentPage === 'Tasks') {
        contentHeading.innerText = 'Tasks';
        contentNotes.innerText = "Your upcoming tasks"
        populateTasksFiltered(tasks, taskList, noProjects);
    } else if (currentPage === 'Projects') {
        contentHeading.innerText = 'Projects';
        contentNotes.innerText = 'Your various projects';
        populateProjects(tasks, taskList);
    } else if (currentPage === 'Tags') {
        newButton.style.display = "none";
        contentHeading.innerText = 'Tags';
        contentNotes.innerText = 'Your assorted tags';
        populateTags(tasks, taskList)
    } else if (currentPage === 'Project') {
        newButton.style.display = "none";
        contentHeading.innerText = currentProject;
        contentNotes.innerText = tasks[getTaskIndex(tasks, currentProject)].notes;
        populateTasksInProject(tasks, taskList, currentProject);
    } else if (currentPage === "Tag") {
        newButton.style.display = "none";
        contentHeading.innerText = currentTag;
        contentNotes.innerText = `Tasks with the ${currentTag} tag`;
        populateTasksWithTag(tasks, taskList, currentTag);
    }
    localStorage.setItem('save', JSON.stringify(tasks));
}

function editTaskForm(task) {
    newTaskForm.classList.remove('new-task-form');
    newTaskForm.classList.add('edit-task-form');
    const taskTitle = newTaskForm.querySelector('#task-title');
    taskTitle.value = task.title;
    const taskDue = newTaskForm.querySelector('#task-due');
    taskDue.value = toString(task.due); // Doesn't show but works behind the scenes
    const taskPriority = newTaskForm.querySelector('#task-priority');
    taskPriority.value = task.priority;
    const taskProject = newTaskForm.querySelector('#task-project');
    taskProject.value = task.project;
    if ('tasks' in task) {
        const taskProjectTitle = newTaskForm.querySelector('.task-project-title');
        taskProjectTitle.style.display = 'none';
        taskProject.style.display = ' none';
    }
    const taskTags = newTaskForm.querySelector('#task-tags');
    taskTags.value = task.tags.join(' ');
    const taskNotes = newTaskForm.querySelector('#task-notes');
    taskNotes.value = task.notes;
    localStorage.setItem('save', JSON.stringify(tasks));
}

// Add event listener(s) for clicking
document.addEventListener('click', (button) => {
    if (button.target.innerText === 'Tasks') {
        currentPage = "Tasks";
        sortTasks(tasks);
        populate(tasks, taskList);
    } else if (button.target.innerText === 'Projects') {
        currentPage = 'Projects';
        sortTasks(tasks);
        populate(tasks, taskList);
    }else if (button.target.innerText === 'Tags') {
        currentPage = 'Tags';
        sortTasks(tasks);
        populate(tasks, taskList);
    }

    if (button.target.classList.value === 'new-all' &&
        currentPage === 'Tasks') {
        const taskProject = newTaskForm.querySelector('#task-project');
        const taskProjectTitle = newTaskForm.querySelector('.task-project-title');
        taskProjectTitle.style.display = 'block';
        taskProject.style.display = ' block';
        newTaskForm.classList.value = 'new-task-form';
        content.style.display = 'none';
        newProjectForm.parentElement.style.display = 'none';
        newTaskForm.parentElement.style.display = 'block';
        const projectPicker = document.querySelector('#task-project');
        emptyDiv(projectPicker);
        const projectOptions = getProjectList(tasks);
        for (let project in projectOptions){
            const projectOption = document.createElement('option');
            projectOption.textContent = projectOptions[project];
            projectPicker.appendChild(projectOption);
        }
    } else if (button.target.classList.value === 'new-all' &&
        currentPage == 'Projects') {
        content.style.display = 'none';
        newTaskForm.parentElement.style.display = 'none';
        newProjectForm.parentElement.style.display = 'block';
        // const projectPicker = document.querySelector('#project-project');
        // const projectOptions = getProjectList(tasks);
        // for (let project in projectOptions){
        //     const projectOption = document.createElement('option');
        //     projectOption.textContent = projectOptions[project];
        //     projectPicker.appendChild(projectOption);
        // }
    }
    localStorage.setItem('save', JSON.stringify(tasks));
})

newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskTitle = newTaskForm['task-title'].value;
    const taskDue = newTaskForm['task-due'].value;
    const taskPriority = newTaskForm['task-priority'].value;
    const taskProject = newTaskForm['task-project'].value;
    let taskTags = newTaskForm['task-tags'].value;
    const taskNotes= newTaskForm['task-notes'].value;

    if (newTaskForm.classList.value === 'new-task-form') {
        tasks.push(new Task(taskTitle));
    }

    if (taskDue.length > 0){
        addDate(tasks, taskTitle, `${taskDue}T00:00`);
    }
    modifyTask(tasks, taskTitle, 'priority', +taskPriority);
    if (taskProject.length > 0) {
        addTaskToProject(tasks, taskTitle, taskProject);
    }
    if (taskTags.length > 0) {
        taskTags = taskTags.split(' ');
        modifyTask(tasks, taskTitle, 'tags', taskTags);
    }
    editNote(tasks, taskTitle, taskNotes);

    sortTasks(tasks);
    populate(tasks, taskList);
    newTaskForm.reset();
    newTaskForm.parentElement.style.display = 'none';
    localStorage.setItem('save', JSON.stringify(tasks));
})

newProjectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const projectTitle = newProjectForm['project-title'].value;
    const projectDue = newProjectForm['project-due'].value;
    const projectPriority = newProjectForm['project-priority'].value;
    let projectTags = newProjectForm['project-tags'].value;
    const projectNotes = newProjectForm['project-notes'].value;

    tasks.push(new Project(projectTitle));
    if (projectDue.length > 0){
        addDate(tasks, projectTitle, `${projectDue}T00:00`);
    }
    modifyTask(tasks, projectTitle, 'priority', +projectPriority);
    if (projectTags.length > 0) {
        projectTags = projectTags.split(' ');
        for (let tag in projectTags) {
            addTag(tasks, projectTitle, projectTags[tag]);
        }
    }
    editNote(tasks, projectTitle, projectNotes);

    sortTasks(tasks);
    populate(tasks, taskList);
    newProjectForm.reset();
    newProjectForm.parentElement.style.display = 'none';
    localStorage.setItem('save', JSON.stringify(tasks));
})

taskList.addEventListener('click', (pointer) => {
    let targetTask = pointer.target.closest('.task');
    if (targetTask.getAttribute('deleted')) {
    } else {
        if (pointer.target.classList[0] == 'status') {
            toggleDone(tasks, targetTask.id);
            populate(tasks, taskList);
        } else if (pointer.target.classList[0] == 'delete') {
            deleteTask(tasks, targetTask.id);
            deleteTaskDOM(targetTask);
        } else if (pointer.target.classList[0] == 'edit') {
            const taskProject = newTaskForm.querySelector('#task-project');
            const taskProjectTitle = newTaskForm.querySelector('.task-project-title');
            taskProjectTitle.style.display = 'block';
            taskProject.style.display = ' block';
            content.style.display = 'none';
            newProjectForm.parentElement.style.display = 'none';
            newTaskForm.parentElement.style.display = 'block';
            const projectPicker = document.querySelector('#task-project');
            emptyDiv(projectPicker);
            const projectOptions = getProjectList(tasks);
            for (let project in projectOptions){
                const projectOption = document.createElement('option');
                projectOption.textContent = projectOptions[project];
                projectPicker.appendChild(projectOption);
            }
            editTaskForm(tasks[getTaskIndex(tasks, targetTask.id)]);
        }
    }
    if (pointer.target.classList[0] == 'title') {
        if (pointer.target.classList.value === 'title title-tag') {
            expandTag(targetTask);
        } else {
            expandTask(targetTask);
        }
    }
    if (pointer.target.classList.value === 'task-project') {
        currentPage = 'Project';
        currentProject = pointer.target.getAttribute('project');
        sortTasks(tasks);
        populate(tasks, taskList);
    }
    if (pointer.target.classList.value === 'tag') {
        currentPage = "Tag";
        currentTag = pointer.target.getAttribute('tags');
        sortTasks(tasks);
        populate(tasks, taskList);
    }
    localStorage.setItem('save', JSON.stringify(tasks));
})