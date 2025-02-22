import "./styles.css";
import { Task, modifyTask, deleteTask, getTaskIndex, toggleDone, addTag, removeTag, addDate, editNote, sortTasks, addTaskToProject, removeTaskFromProject } from "./task.js";
import { Project, getProjectList } from "./project.js";
import { populateTasksFiltered, noProjects, justProjects, populateTasks, expandTask, deleteTaskDOM } from "./tasks-view.js";
import { populateProjects } from "./projects-view.js";
import { populateTags } from "./tags-view.js";

// Assign variables 
const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const newTask = document.querySelector('.new-task');
const newProject = document.querySelector('.new-project');
const newTag = document.querySelector('.new-tag');
const content = document.querySelector('.content');
const contentHeading = document.createElement('h2');
const taskList = document.createElement('ul');
const footer = document.querySelector('footer');
const newTaskForm = document.querySelector('#add-task-form');
const newProjectForm = document.querySelector('#add-project-form')
let currentPage = '';

content.appendChild(contentHeading);
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

// Display tasks
currentPage = 'Tasks';
populate(tasks, taskList);

// Save to local storage
localStorage.setItem('save', JSON.stringify(tasks));

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
    content.style.display = 'block';
    if (currentPage === 'Tasks') {
        contentHeading.innerText = 'Tasks';
        populateTasksFiltered(tasks, taskList, noProjects);
    } else if (currentPage === 'Projects') {
        contentHeading.innerText = 'Projects';
        populateTasksFiltered(tasks, taskList, justProjects);
    } else if (currentPage === 'Tags') {
        contentHeading.innerText = 'Tags';
        populateTags(tasks, taskList)
    }
}

// Add event listener(s) for clicking
menu.addEventListener('click', (button) => {
    if (button.target.innerText === 'Tasks') {
        currentPage = 'Tasks';
        sortTasks(tasks);
        populate(tasks, taskList);
    } else if (button.target.innerText === 'Projects') {
        currentPage = 'Projects';
        sortTasks(tasks);
        populate(tasks, taskList);
    }else if (button.target.innerText === 'Tags') {
        // currentPage = 'Tags';
        // sortTasks(tasks);
        // populate(tasks, taskList);
    }

    if (button.target.innerText === '+') {
        button.target.innerText = '-';
        newTask.style.display = 'block';
        newProject.style.display = 'block';
        newTag.style.display = 'block';
    } else if (button.target.innerText === '-') {
        button.target.innerText = '+';
        newTask.style.display = 'none';
        newProject.style.display = 'none';
        newTag.style.display = 'none';
    }

    if (button.target.innerText === 'New Task') {
        content.style.display = 'none';
        newProjectForm.parentElement.style.display = 'none';
        newTaskForm.parentElement.style.display = 'block';
        const projectPicker = document.querySelector('#task-project');
        const projectOptions = getProjectList(tasks);
        for (let project in projectOptions){
            const projectOption = document.createElement('option');
            projectOption.textContent = projectOptions[project];
            projectPicker.appendChild(projectOption);
        }
    } else if (button.target.innerText === 'New Project') {
        content.style.display = 'none';
        newTaskForm.parentElement.style.display = 'none';
        newProjectForm.parentElement.style.display = 'block';
        const projectPicker = document.querySelector('#project-project');
        const projectOptions = getProjectList(tasks);
        for (let project in projectOptions){
            const projectOption = document.createElement('option');
            projectOption.textContent = projectOptions[project];
            projectPicker.appendChild(projectOption);
        }
    } else if (button.target.innerText === 'Log Tasks') {
        console.table(tasks);
    }
})

newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskTitle = newTaskForm['task-title'].value;
    const taskDue = newTaskForm['task-due'].value;
    const taskPriority = newTaskForm['task-priority'].value;
    const taskProject = newTaskForm['task-project'].value;
    let taskTags = newTaskForm['task-tags'].value;
    const taskNotes= newTaskForm['task-notes'].value;

    tasks.push(new Task(taskTitle));
    if (taskDue.length > 0){
        addDate(tasks, taskTitle, `${taskDue}T00:00`);
    }
    modifyTask(tasks, taskTitle, 'priority', +taskPriority);
    if (taskProject.length > 0) {
        addTaskToProject(tasks, taskTitle, taskProject);
    }
    if (taskTags.length > 0) {
        taskTags = taskTags.split(' ');
        for (let tag in taskTags) {
            addTag(tasks, taskTitle, taskTags[tag]);
        }
    }
    editNote(tasks, taskTitle, taskNotes);

    sortTasks(tasks);
    populate(tasks, taskList);
    newTaskForm.reset();
    newTaskForm.parentElement.style.display = 'none';
})

newProjectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const projectTitle = newProjectForm['project-title'].value;
    const projectDue = newProjectForm['project-due'].value;
    const projectPriority = newProjectForm['project-priority'].value;
    const projectProject = newProjectForm['project-project'].value;
    let projectTags = newProjectForm['project-tags'].value;
    const projectNotes= newProjectForm['project-notes'].value;

    tasks.push(new Project(projectTitle));
    if (projectDue.length > 0){
        addDate(tasks, projectTitle, `${projectDue}T00:00`);
    }
    modifyTask(tasks, projectTitle, 'priority', +projectPriority);
    if (projectProject.length > 0) {
        addTaskToProject(tasks, projectTitle, projectProject);
    }
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
})

taskList.addEventListener('click', (pointer) => {
    let targetTask = pointer.target.closest('.task')
    if (targetTask.getAttribute('deleted')) {
    } else {
        if (pointer.target.classList[0] == 'status') {
            toggleDone(tasks, targetTask.id);
            populate(tasks, taskList);
        } if (pointer.target.classList[0] == 'delete') {
            deleteTask(tasks, targetTask.id);
            deleteTaskDOM(targetTask);
        }
    }

    if (pointer.target.classList[0] == 'title') {
        expandTask(targetTask);
    }
})





// Testing down here
console.log('TASK LIST');
console.table(tasks);

tasks.push(new Task('clean house'));
modifyTask(tasks, 'clean house', 'priority', 1);
addDate(tasks, 'clean house', '2026-04-03T00:00');
tasks.push(new Task('do laundry'));
addDate(tasks, 'do laundry', '2025-11-11T00:00');
modifyTask(tasks, 'do laundry', 'priority', -1);
tasks.push(new Task('find a job'));
tasks.push(new Task('make bed'));
modifyTask(tasks, 'make bed', 'priority', 1);
tasks.push(new Task('water plants'));
addTag(tasks, 'clean house', 'personal');
toggleDone(tasks, 'make bed');
tasks.push(new Task('eat apple'));
tasks.push(new Task('zip pants'));
addDate(tasks, 'zip pants', '2025-02-22T00:00');
tasks.push(new Project('eat'));
addTaskToProject(tasks, 'eat apple', 'eat');
tasks.push(new Task('bake bread'));
addTaskToProject(tasks, 'bake bread', 'eat');
toggleDone(tasks, 'bake bread');
addTag(tasks, 'zip pants', 'personal');
addTag(tasks, 'zip pants', 'clothing');
addDate(tasks, 'water plants', '2025-02-26T00:00')
tasks.push(new Project('Get myself together'));
addTaskToProject(tasks, 'zip pants', 'Get myself together')

editNote(tasks, 'zip pants', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, molestiae vel consequuntur harum nobis facilis corrupti neque alias vero commodi asperiores ullam, fugit adipisci illo perferendis fuga enim voluptatem natus!');

sortTasks(tasks);
console.log('TASK LIST SORTED');
console.table(tasks);