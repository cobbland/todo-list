import "./styles.css";
import { Task, modifyTask, deleteTask, getTaskIndex, toggleDone, addTag, removeTag, addDate, sortTasks } from "./task.js";
import { Project, addTaskToProject, removeTaskFromProject } from "./project.js";
import { populateTasks, expandTask } from "./tasks-view.js";
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

populateTasks(tasks, taskList);
currentPage = 'Tasks';

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
    if (currentPage === 'Tasks') {
        contentHeading.innerText = 'Tasks';
        populateTasks(tasks, taskList);
    } else if (currentPage === 'Projects') {
        contentHeading.innerText = 'Projects';
        populateProjects(tasks, taskList);
    } else if (currentPage === 'Tags') {
        contentHeading.innerText = 'Tags';
        populateTags(tasks, taskList)
    }
}

// Add event listener(s) for clicking

menu.addEventListener('click', (button) => {
    console.log(button.target)
    if (button.target.innerText === 'Tasks') {
        currentPage = 'Tasks';
        sortTasks(tasks);
        populate(tasks, taskList);
    } else if (button.target.innerText === 'Projects') {
        // currentPage = 'Projects';
        // sortTasks(tasks);
        // populate(tasks, taskList);
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
})

taskList.addEventListener('click', (pointer) => {
    if (pointer.target.classList == 'status') {
        let targetTask = pointer.target.closest('.task')
        toggleDone(tasks, targetTask.id);
        populate(tasks, taskList);
    } if (pointer.target.classList[0] == 'title') {
        let targetTask = pointer.target.closest('.task');
        console.log(pointer.target.closest('.task'));
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

sortTasks(tasks);
console.log('TASK LIST SORTED');
console.table(tasks);
