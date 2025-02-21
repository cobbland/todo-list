import { getTaskIndex } from "./task";

function populateTags(taskList, container) {
    const allTags = [];
    for (let task in taskList) {
        const taskIndex = getTaskIndex(taskList, taskList[task].title);
        if (taskList[taskIndex].tags != []) {
            for (let tag in taskList[taskIndex].tags) {
                if (!allTags.includes(taskList[taskIndex].tags[tag])) {
                    allTags.pop(taskList[taskIndex].tags[tag]);
                    const tagItem = document.createElement('li');
                    const tagTitle = document.createElement('span');
                    tagTitle.textContent = taskList[taskIndex].tags[tag];
                    tagItem.appendChild(tagTitle);
                    container.appendChild(tagItem);
                }
            }
        }
    }
}

export { populateTags };