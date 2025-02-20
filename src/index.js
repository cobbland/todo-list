import "./styles.css";
import { Task, modifyTask, deleteTask, getTaskIndex } from "./task.js";
import { Project, addTaskToProject, removeTaskFromProject, turnTaskToProject } from "./project.js";

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
modifyTask(tasks, 'clean house', 'priority', 'high');
modifyTask(tasks, 'clean house', 'due', 'tomorrow');
tasks.push(new Task('do laundry'));
modifyTask(tasks, 'do laundry', 'due', 'next week');
tasks.push(new Task('wash dishes'));

turnTaskToProject(tasks, 'clean house');

deleteTask(tasks, 'wash dishes');

addTaskToProject(tasks, 'do laundry', 'clean house');
console.table(tasks);
console.table(tasks[getTaskIndex(tasks, 'clean house')].taskList);

removeTaskFromProject(tasks, 'do laundry', 'clean house');

// Save to local storage
localStorage.setItem('save', JSON.stringify(tasks));

/* Add below after internal logic is working */

// Add content to DOM via variables
menu.textContent = "Menu";
content.textContent = "Content";

// Add event listener(s) for clicking