class Task {
    title = undefined;
    dueDate = undefined;
    priority = undefined;
    notes = undefined;
    project = undefined;
    tags = undefined;

    constructor(title) {
        this.title = title;
    }
}

function modifyTask(taskList, taskTitle, key, value) {
    taskList.find((task) => task.title === taskTitle)[key] = value;
}
export { Task, modifyTask };