import { getTaskIndex } from "./task";

function populateTasks(taskList, container) {
    for (let task in taskList) {
        const taskIndex = getTaskIndex(taskList, taskList[task].title);

        if (!('tasks' in taskList[taskIndex])) {
            const taskItem = document.createElement('li');
            const taskTitle = document.createElement('span');
            const taskPriority = document.createElement('span');
            const taskDue = document.createElement('span');
            const taskStatus = document.createElement('span');
            const taskProject = document.createElement('span');
            const taskTags = document.createElement('span');

            taskItem.classList.add('task');
            taskTitle.classList.add('title');
            taskPriority.classList.add('priority');
            taskDue.classList.add('due');
            taskStatus.classList.add('status');
            taskProject.classList.add('task-project');
        
            taskTitle.textContent = taskList[task].title;
        
            if (taskList[task].priority === 1) {
                taskPriority.textContent = ' 🔥';
            } else if (taskList[task].priority === -1) {
                taskPriority.textContent = ' 🧊';
            } else {
                taskPriority.textContent = ' ';
            }
            
            if (taskList[task].due === Infinity) {
                taskDue.textContent = ' ';
            } else {
                taskDue.textContent = `${taskList[task].due.getFullYear()}-${taskList[task].due.getMonth()+1}-${taskList[task].due.getDate()}`
            }
        
            if (taskList[task].done === true) {
                taskStatus.textContent = '☒';
                taskItem.classList.add('done');
            } else {
                taskStatus.textContent = '☐';
            }

            if (taskList[task].project !== undefined) {
                taskProject.textContent = `${taskList[task].project}`;
            }

            // Confirm that the below works!!!!
            if (taskList[task].tags != []) {
                for (let tag in taskList[task].tags) {
                    const taskTag = document.createElement('span');
                    taskTag.textContent = `${tag}`;
                }
            }
            
            container.appendChild(taskItem);
            taskItem.appendChild(taskStatus);
            taskItem.appendChild(taskTitle);
            taskTitle.appendChild(taskPriority);
            taskItem.appendChild(taskProject);
            taskItem.appendChild(taskTags);
            taskItem.appendChild(taskDue);
        }
    }
}

export { populateTasks };