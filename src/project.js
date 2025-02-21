import { Task, getTaskIndex } from "./task.js";

class Project extends Task {
    constructor(title, tasks = []) {
        super(title);
        this.tasks = tasks;
    }
}

function addTaskToProject(taskList, taskTitle, projectTitle) {
    let taskIndex = taskList.indexOf(taskList.find((task) => task.title === taskTitle));
    let projectIndex = taskList.indexOf(taskList.find((project) => project.title === projectTitle));
    taskList[projectIndex].tasks.unshift(taskList[taskIndex]);
    taskList.splice(taskIndex, 1);
}

function removeTaskFromProject(taskList, taskTitle, projectTitle){
    let projectIndex = getTaskIndex(taskList, projectTitle);
    let taskIndex = getTaskIndex(taskList[projectIndex].tasks, taskTitle);
    taskList.unshift(new Task(taskList[projectIndex].tasks[taskIndex].title));
    projectIndex++;
    let newTaskIndex = 0;
    for (let key in taskList[projectIndex].tasks[taskIndex]) {
        taskList[newTaskIndex][key] = taskList[projectIndex].tasks[taskIndex][key];
    }
    taskList[projectIndex].tasks.splice(taskIndex, 1);
}

function turnTaskToProject(taskList, taskTitle) {
    let taskIndex = getTaskIndex(taskList, taskTitle);
    // create project from task and add to taskList
    taskList.unshift(new Project(taskList[taskIndex].title));
    // copy task properties to project
    taskIndex++; // because the new project was added to the front of the list
    let projectIndex = taskList.indexOf(taskList.find((project) => project.title === taskTitle));
    for (let key in taskList[taskIndex]) {
        taskList[projectIndex][key] = taskList[taskIndex][key];
    }
    // delete task from taskList
    taskList.splice(taskIndex, 1);
}

function turnProjectToTask(taskList, projectTitle) {
    let projectIndex = getTaskIndex(taskList, projectTitle);
    if (taskList[projectIndex].tasks.length === 0) {
        taskList.unshift(new Task(projectTitle))
        projectIndex++
        taskList.splice(projectIndex, 1);
    } else {
        console.log('Project must first be empty!')
    }
}

export { Project, addTaskToProject, removeTaskFromProject, turnTaskToProject, turnProjectToTask };