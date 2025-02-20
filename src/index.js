import "./styles.css";
import { modifyTask, Task } from "./task.js";
import { Project, turnTaskToProject } from "./project.js";

// Assign variables 
const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');
const footer = document.querySelector('footer');

// Tests
const tasks = [];
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
tasks.push(new Task('wash dishes'));
console.log(tasks);

turnTaskToProject(tasks, 'clean house');
console.log(tasks);

localStorage.setItem('save', JSON.stringify(tasks));

/* Add below after internal logic is working */

// Add content to DOM via variables
menu.textContent = "Menu";
content.textContent = "Content";

// Add event listener(s) for clicking