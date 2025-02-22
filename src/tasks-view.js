import { getTaskIndex } from "./task";

function populateTasks(taskList, container) {
    for (let task in taskList) {
        const taskIndex = getTaskIndex(taskList, taskList[task].title);

        if (!('tasks' in taskList[taskIndex])) {
            const taskItem = document.createElement('li');
            const taskTitle = document.createElement('span');
            const taskPriority = document.createElement('span');
            const taskDue = document.createElement('span');
            const taskDueExact = document.createElement('span');
            const taskStatus = document.createElement('span');
            const taskProject = document.createElement('span');
            const taskTags = document.createElement('span');

            taskItem.classList.add('task');
            taskItem.id = taskList[task].title;
            taskTitle.classList.add('title');
            taskPriority.classList.add('priority');
            taskDue.classList.add('due');
            taskDueExact.classList.add('exact-due')
            taskStatus.classList.add('status');
            taskProject.classList.add('task-project');
            taskTags.classList.add('tags');

            taskProject.style.display = 'none';
            taskTags.style.display = 'none';
            taskDueExact.style.display = 'none';
        
            taskTitle.textContent = taskList[task].title;
        
            if (taskList[task].priority === 1) {
                taskPriority.textContent = ' 🔥';
                taskItem.setAttribute('priority', 'high')
            } else if (taskList[task].priority === -1) {
                taskPriority.textContent = ' 🧊';
                taskItem.setAttribute('priority', 'low')
            } else {
                taskPriority.textContent = ' ';
            }
            
            if (taskList[task].due === Infinity) {
                taskDue.textContent = ' ';
                taskDueExact.textContent = ' ';
            } else {
                const today = new Date();
                const oneWeek = new Date();
                oneWeek.setDate(today.getDate() + 7);
                if (taskList[task].due.setHours(0,0,0,0) == today.setHours(0,0,0,0)) {
                    taskDue.textContent = 'Now';
                    taskDue.classList.add('today');
                } else if (taskList[task].due.setHours(0,0,0,0) <= oneWeek.setHours(0,0,0,0)) {
                    taskDue.textContent = 'Soon';
                    taskDue.classList.add('this-week');
                } else {
                    taskDue.textContent = 'Later';
                    taskDue.classList.add('later');
                }
                taskDueExact.textContent = `${taskList[task].due.getFullYear()}-${taskList[task].due.getMonth()+1}-${taskList[task].due.getDate()}`
            }
        
            if (taskList[task].done === true) {
                taskStatus.textContent = '☒';
                taskItem.setAttribute('done', 'true');
            } else {
                taskStatus.textContent = '☐';
                taskItem.setAttribute('done', 'false')
            }

            if (taskList[task].project !== undefined) {
                taskProject.textContent = `${taskList[task].project}`;
                taskProject.setAttribute('project', taskList[task].project);
            }

            // Confirm that the below works!!!!
            if (taskList[task].tags.length > 0) {
                for (let tag in taskList[task].tags) {
                    const taskTag = document.createElement('li');
                    taskTag.classList.add('tag');
                    taskTag.textContent = taskList[task].tags[tag];
                    taskTag.setAttribute('tags', taskList[task].tags[tag]);
                    taskTags.appendChild(taskTag);
                }
                
            }
            
            container.appendChild(taskItem);
            taskItem.appendChild(taskStatus);
            taskItem.appendChild(taskTitle);
            taskTitle.appendChild(taskPriority);
            taskItem.appendChild(taskDue);
            taskItem.appendChild(taskProject);
            taskItem.appendChild(taskTags);
            taskItem.appendChild(taskDueExact);
        }
    }
}

function expandTask(taskListItem) {
    const taskProject = taskListItem.querySelector('.task-project');
    const taskTags = taskListItem.querySelector('.tags');
    const taskExactDue = taskListItem.querySelector('.exact-due')

    if (taskProject.style.display == 'none') {
        taskProject.style.display = 'inline';
        taskTags.style.display = 'flex';
        taskExactDue.style.display = 'inline';
    } else {
        taskProject.style.display = 'none';
        taskTags.style.display = 'none';
        taskExactDue.style.display = 'none';
    }

    
}

export { populateTasks, expandTask };