import { Task } from "./task.js";

class Project extends Task {
    constructor(title, taskList = []) {
        super(title);
        this.taskList = taskList;
    }
}

function addTasktoProject(taskList, taskTitle, projectTitle) {
    //
}

function turnTaskToProject(taskList, taskTitle) {
    let taskIndex = taskList.indexOf(taskList.find((task) => task.title === taskTitle));
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

export { Project, turnTaskToProject };