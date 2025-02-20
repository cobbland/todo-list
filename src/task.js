class Task {
    dueDate = undefined;
    priority = undefined;
    notes = undefined;
    project = undefined;
    tags = undefined;

    constructor(title) {
        this.title = title;
    }
}

function modifyTask(task, key, value) {
    task[key] = value;
}
export { Task, modifyTask };