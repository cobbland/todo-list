import { Task, getTaskIndex } from "./task.js";

class Project extends Task {
    constructor(title, taskList = []) {
        super(title);
        this.taskList = taskList;
    }
}

function addTaskToProject(taskList, taskTitle, projectTitle) {
    let taskIndex = taskList.indexOf(taskList.find((task) => task.title === taskTitle));
    let projectIndex = taskList.indexOf(taskList.find((project) => project.title === projectTitle));
    taskList[projectIndex].taskList.unshift(taskList[taskIndex]);
    taskList.splice(taskIndex, 1);
}

function removeTaskFromProject(taskList, taskTitle, projectTitle){
    let projectIndex = getTaskIndex(taskList, projectTitle);
    let taskIndex = getTaskIndex(taskList[projectIndex].taskList, taskTitle);
    taskList.unshift(new Task(taskList[projectIndex].taskList[taskIndex].title));
    projectIndex++;
    let newTaskIndex = 0;
    for (let key in taskList[projectIndex].taskList[taskIndex]) {
        taskList[newTaskIndex][key] = taskList[projectIndex].taskList[taskIndex][key];
    }
    taskList[projectIndex].taskList.splice(taskIndex, 1);
}

function turnTaskToProject(taskList, taskTitle) {
    let taskIndex = getTaskIndex(taskList, taskTitle);
    // create project from task and add to taskList
    taskList.unshift(new Project(taskList[taskIndex].title, [taskList[taskIndex]]));
    // copy task properties to project
    taskIndex++; // because the new project was added to the front of the list
    let projectIndex = taskList.indexOf(taskList.find((project) => project.title === taskTitle));
    for (let key in taskList[taskIndex]) {
        taskList[projectIndex][key] = taskList[taskIndex][key];
    }
    // delete task from taskList
    taskList.splice(taskIndex, 1);
}

export { Project, addTaskToProject, removeTaskFromProject, turnTaskToProject };