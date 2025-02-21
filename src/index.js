import "./styles.css";
import { Task, modifyTask, deleteTask, getTaskIndex, toggleDone, addTag, removeTag, sortTasks } from "./task.js";
import { Project, addTaskToProject, removeTaskFromProject, turnTaskToProject, turnProjectToTask } from "./project.js";

// Assign variables 
const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');
const footer = document.querySelector('footer');

// Run
const tasks = [];

// Load from local storage
if (localStorage.getItem('save')) {
    console.log('Loading local storage...')
    tasks.concat(localStorage.getItem('save'));
} else {
    console.log('No local storage.');
}

tasks.push(new Task('clean house'));
modifyTask(tasks, 'clean house', 'priority', 1);
modifyTask(tasks, 'clean house', 'due', 'tomorrow');
tasks.push(new Task('do laundry'));
modifyTask(tasks, 'do laundry', 'due', 'next week');
modifyTask(tasks, 'do laundry', 'priority', -1);
tasks.push(new Task('find a job'));
tasks.push(new Task('make bed'));
modifyTask(tasks, 'make bed', 'priority', 1);
tasks.push(new Task('water plants'));
addTag(tasks, 'clean house', 'personal');
toggleDone(tasks, 'make bed');
tasks.push(new Task('eat apple'));
tasks.push(new Task('zip pants'));

console.log('TASK LIST');
console.table(tasks);

sortTasks(tasks);
console.log('TASK LIST SORTED');
console.table(tasks);

// Save to local storage
localStorage.setItem('save', JSON.stringify(tasks));





/* Add below after internal logic is working */

// Add content to DOM via variables
menu.textContent = "Menu";
content.textContent = "Content";

const contentHeading = document.createElement('h2');
contentHeading.innerText = 'Tasks';
content.appendChild(contentHeading);

const taskList = document.createElement('ul');
content.appendChild(taskList);


for (let task in tasks) {
    const taskItem = document.createElement('li');
    taskItem.textContent += tasks[task].title;
    taskList.appendChild(taskItem);
    if ('tasks' in tasks[task]) {
        for (let subtask in tasks[task].tasks) {
            const taskSubItem = document.createElement('li');
            taskSubItem.textContent += tasks[task].tasks[subtask].title;
            taskItem.appendChild(taskSubItem);
        }
    }
}

// Add event listener(s) for clicking