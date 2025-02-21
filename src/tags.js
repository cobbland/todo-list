import { getTaskIndex } from "./task";
import { Project } from "./project";

// add category
function addTag(taskList, taskTitle, tagTitle) {
    let taskIndex = getTaskIndex(taskList, taskTitle);
    taskList[taskIndex].tags.unshift(tagTitle);
    if ('tasks' in taskList[taskIndex]) {
        for (let task in taskList[taskIndex].tasks) {
            if (!taskList[taskIndex].tasks[task].tags.includes(tagTitle)) {
                console.log(taskList[taskIndex].tasks[task].title)
                addTag(taskList[taskIndex].tasks, taskList[taskIndex].tasks[task].title, tagTitle);
            }
        }
    }
    console.table(taskList[taskIndex].tasks);
}

// remove category

export { addTag };