import "./styles.css";
import { Task, modifyTask, deleteTask, getTaskIndex } from "./task.js";
import { Project, addTaskToProject, removeTaskFromProject, turnTaskToProject } from "./project.js";
import { addTag, removeTag } from "./tags.js";

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
tasks.push(new Task('find a job'));

turnTaskToProject(tasks, 'clean house');

addTaskToProject(tasks, 'do laundry', 'clean house');
tasks.push(new Task('make bed'));
tasks.push(new Task('water plants'));
addTaskToProject(tasks, 'make bed', 'clean house');
addTaskToProject(tasks, 'water plants', 'clean house');


addTag(tasks, 'clean house', 'personal');
removeTag(tasks[getTaskIndex(tasks, 'clean house')].tasks, 'make bed', 'personal');

console.log('TASK LIST');
console.table(tasks);
console.log('...');
console.log('CLEAN HOUSE')
console.table(tasks[getTaskIndex(tasks, 'clean house')].tasks);

removeTaskFromProject(tasks, 'do laundry', 'clean house');

// Save to local storage
localStorage.setItem('save', JSON.stringify(tasks));

/* Add below after internal logic is working */

// Add content to DOM via variables
menu.textContent = "Menu";
content.textContent = "Content";

// Add event listener(s) for clicking