import "./styles.css";
import { modifyTask, Task } from "./task.js";

// Assign variables 
const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');
const footer = document.querySelector('footer');

// Tests
const newTask = new Task('Wash dishes');

console.log(newTask);
console.log(newTask.title);

modifyTask(newTask, 'priority', 'high');

console.log(newTask);
console.log(newTask.priority);

/* Add below after internal logic is working */

// Add content to DOM via variables
menu.textContent = "Menu";
content.textContent = "Content";

// Add event listener(s) for clicking