import { Task } from "./task.js";

class Project extends Task {
    constructor(title, tasks = []) {
        super(title);
        this.tasks = tasks;
    }
}

function getProjectList(taskList) {
    const projectArray = [];
    for (let task in taskList) {
        if ('tasks' in taskList[task]) {
            projectArray.push(taskList[task].title);
        }
    }
    return projectArray;
}

// function turnTaskToProject(taskList, taskTitle) {
//     let taskIndex = getTaskIndex(taskList, taskTitle);
//     // create project from task and add to taskList
//     taskList.unshift(new Project(taskList[taskIndex].title));
//     // copy task properties to project
//     taskIndex++; // because the new project was added to the front of the list
//     let projectIndex = taskList.indexOf(taskList.find((project) => project.title === taskTitle));
//     for (let key in taskList[taskIndex]) {
//         taskList[projectIndex][key] = taskList[taskIndex][key];
//     }
//     // delete task from taskList
//     taskList.splice(taskIndex, 1);
// }

// function turnProjectToTask(taskList, projectTitle) {
//     let projectIndex = getTaskIndex(taskList, projectTitle);
//     if (taskList[projectIndex].tasks.length === 0) {
//         taskList.unshift(new Task(projectTitle))
//         projectIndex++
//         taskList.splice(projectIndex, 1);
//     } else {
//         console.log('Project must first be empty!')
//     }
// }

export { Project, getProjectList };