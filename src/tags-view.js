import { sortTasks } from "./task";
import { populateTasksWithTag } from "./tasks-view";

function populateTags(taskList, container) {

    const allTags = [];
    for (let task in taskList) {
        for (let tag in taskList[task].tags) {
            if (!allTags.includes(taskList[task].tags[tag])) {
                allTags.push(taskList[task].tags[tag]);
            }
        }
    }

    for (let tag in allTags) {
        const taskItem = document.createElement('li');
        const taskTitle = document.createElement('span');
        const projectTasks = document.createElement('ul');
    
        taskItem.classList.add('task');
        taskItem.id = allTags[tag];
        taskTitle.classList.add('title');
        taskTitle.classList.add('title-tag');
        projectTasks.classList.add('project-tasks');
    
        projectTasks.style.display = 'none';
    
        taskTitle.textContent = allTags[tag];

        populateTasksWithTag(taskList, projectTasks, allTags[tag]);

        projectTasks.appendChild

        container.appendChild(taskItem);
        taskItem.appendChild(taskTitle);
        taskItem.appendChild(projectTasks);
    }
}

function expandTag(taskListItem) {
    const tagTask = taskListItem.querySelector('.project-tasks');
    if (tagTask.style.display === 'none') {
        tagTask.style.display = 'grid';
    } else {
        tagTask.style.display = 'none'
    }
}

export { populateTags, expandTag };