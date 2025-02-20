class Task {
    title = undefined;
    due = undefined;
    priority = 'normal';
    notes = undefined;
    // project = undefined;
    tags = undefined;
    done = 'not done';

    constructor(title) {
        this.title = title;
    }
}

function modifyTask(taskList, taskTitle, key, value) {
    taskList.find((task) => task.title === taskTitle)[key] = value;
}

function deleteTask(taskList, taskTitle) {
    let taskIndex = taskList.indexOf(taskList.find((task) => task.title === taskTitle));
    taskList.splice(taskIndex, 1);
}

export { Task, modifyTask, deleteTask };