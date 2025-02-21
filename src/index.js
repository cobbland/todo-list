import "./styles.css";
import { Task, modifyTask, deleteTask, getTaskIndex, toggleDone, addTag, removeTag, addDate, sortTasks } from "./task.js";
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

populateTasks(tasks, taskList);

function populateTasks(taskList, container) {
    for (let task in taskList) {
        const taskItem = document.createElement('li');
        const taskTitle = document.createElement('span');
        const taskPriority = document.createElement('span');
        const taskDue = document.createElement('span');
        const taskStatus = document.createElement('span');
    
        taskTitle.textContent = taskList[task].title;
    
        if (taskList[task].priority === 1) {
            taskPriority.textContent = '🔥';
        } else if (taskList[task].priority === -1) {
            taskPriority.textContent = '🧊';
        } else {
            taskPriority.textContent = ' ';
        }
        
        if (taskList[task].due === Infinity) {
            taskDue.textContent = ' ';
        } else {
            taskDue.textContent = `${taskList[task].due.getFullYear()}-${taskList[task].due.getMonth()+1}-${taskList[task].due.getDate()}`
        }
    
        if (taskList[task].done === true) {
            taskStatus.textContent = '☒';
        } else {
            taskStatus.textContent = '☐';
        }
        
        container.appendChild(taskItem);
        taskItem.appendChild(taskStatus);
        taskItem.appendChild(taskTitle);
        taskItem.appendChild(taskPriority);
        taskItem.appendChild(taskDue);
    
        taskItem.classList.add('task');
    
        if ('tasks' in taskList[task]) {
            taskItem.classList.add('project');
            populateTasks(taskList[task].tasks, taskItem);
        }
    }
}


// Add event listener(s) for clicking