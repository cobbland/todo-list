class Task {
    title = undefined;
    due = undefined;
    priority = 'normal';
    notes = undefined;
    tags = [];
    done = false;

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

function getTaskIndex(taskList, taskTitle) {
    return taskList.indexOf(taskList.find((task) => task.title === taskTitle));
}

function toggleDone(taskList, taskTitle) {
    let taskIndex = getTaskIndex(taskList, taskTitle);
    if (taskList[taskIndex].done) {
        taskList[taskIndex].done = false;
    } else {
        taskList[taskIndex].done = true;
    }
}

function addTag(taskList, taskTitle, tagTitle) {
    let taskIndex = getTaskIndex(taskList, taskTitle);
    if (!taskList[taskIndex].tags.includes(tagTitle)) {
        taskList[taskIndex].tags.unshift(tagTitle);
        if ('tasks' in taskList[taskIndex]) {
            for (let task in taskList[taskIndex].tasks) {
                if (!taskList[taskIndex].tasks[task].tags.includes(tagTitle)) {
                    addTag(taskList[taskIndex].tasks, taskList[taskIndex].tasks[task].title, tagTitle);
                }
            }
        }
    }
}

function removeTag(taskList, taskTitle, tagTitle) {
    let taskIndex = getTaskIndex(taskList, taskTitle);
    if (taskList[taskIndex].tags.includes(tagTitle)) {
        let tagIndex = taskList[taskIndex].tags.find((tag) => tag === tagTitle);
        taskList[taskIndex].tags.splice(tagIndex, 1);
        if ('tasks' in taskList[taskIndex]) {
            for (let task in taskList[taskIndex].tasks) {
                if (taskList[taskIndex].tasks[task].tags.includes(tagTitle)) {
                    removeTag(taskList[taskIndex].tasks, taskList[taskIndex].tasks[task].title, tagTitle);
                }
            }
        }
    }
}

export { Task, modifyTask, deleteTask, getTaskIndex, toggleDone, addTag, removeTag };