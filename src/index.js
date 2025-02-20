import "./styles.css";
import { modifyTask, Task } from "./task.js";

// Assign variables 
const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');
const footer = document.querySelector('footer');

// Tests
const tasks = [];
if (localStorage.getItem('save')) {
    tasks.concat(localStorage.getItem('save'));
} else {
    console.log('No local storage.');
}

console.log(tasks);

tasks.push(new Task('Wash dishes'));

modifyTask(tasks, 'Wash dishes', 'priority', 'high');

tasks.push(new Task('do laundry'));

modifyTask(tasks, 'Wash dishes', 'priority', 'low');
modifyTask(tasks, 'do laundry', 'priority', 'high');

console.log(tasks);

localStorage.setItem('save', JSON.stringify(tasks));

/* Add below after internal logic is working */

for (let task in tasks) {
    console.log()
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    for (let value in task) {
        newTask.textContent += `${tasks[task][value]}`;
    }
    content.appendChild(newTask);
}

// Add content to DOM via variables
menu.textContent = "Menu";
content.textContent = "Content";

// Add event listener(s) for clicking