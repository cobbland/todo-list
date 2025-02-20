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
    taskList.push(new Project(taskList[taskIndex].title, [taskList[taskIndex]]))
    // copy task properties to project

    // delete task from taskList
    taskList.splice(taskIndex, 1);
}

export { Project, turnTaskToProject };