import { getTaskIndex } from "./task";

function populateProjects(taskList, container) {
    for (let task in taskList) {
        const taskIndex = getTaskIndex(taskList, taskList[task].title);

        if ('tasks' in taskList[taskIndex]) {
            const taskItem = document.createElement('li');
            const taskTitle = document.createElement('span');
            const taskPriority = document.createElement('span');
            const taskDue = document.createElement('span');
            const taskStatus = document.createElement('span');
            const taskProject = document.createElement('span');
            const taskTags = document.createElement('span');

            taskItem.classList.add('task');
            taskItem.id = taskList[task].title;
            taskTitle.classList.add('title');
            taskPriority.classList.add('priority');
            taskDue.classList.add('due');
            taskStatus.classList.add('status');
            taskProject.classList.add('task-project');
            taskTags.classList.add('tags');
        
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
            } else {
                const today = new Date();
                const oneWeek = new Date();
                oneWeek.setDate(today.getDate() + 7);
                if (taskList[task].due.setHours(0,0,0,0) == today.setHours(0,0,0,0)) {
                    taskDue.textContent = 'Today'
                    taskDue.classList.add('today');
                } else if (taskList[task].due.setHours(0,0,0,0) <= oneWeek.setHours(0,0,0,0)) {
                    taskDue.textContent = 'This week'
                    taskDue.classList.add('this-week');
                } else {
                    taskDue.textContent = `${taskList[task].due.getFullYear()}-${taskList[task].due.getMonth()+1}-${taskList[task].due.getDate()}`
                }
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
                console.log(`checked for tags on: ${taskList[task].title}`);
                for (let tag in taskList[task].tags) {
                    console.log(`task is: ${taskList[task].tags[tag]}`)
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
            taskItem.appendChild(taskProject);
            taskItem.appendChild(taskTags);
            taskItem.appendChild(taskDue);
        }
    }
}

export { populateProjects };