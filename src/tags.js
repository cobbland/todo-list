import { getTaskIndex } from "./task";

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

export { addTag, removeTag };