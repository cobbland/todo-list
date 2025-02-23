import { getTaskIndex } from "./task";

function populateTasksFiltered(taskList, container, filterFunction) {
    const filteredTaskList = taskList.filter(filterFunction)
    populateTasks(filteredTaskList, container);
}

function noProjects(task) {
    return !('tasks' in task);
}

function justProjects(task) {
    return ('tasks' in task);
}

function dueToday(task) {
    const tempDate = new Date();
    const todayDate = new Date(`${tempDate.getFullYear()}-${String(tempDate.getMonth() + 1).padStart(2, '0')}-${String(tempDate.getDate()).padStart(2, '0')}T00:00`);
    return (todayDate - task.due >= 0);
}

function dueSoon(task) {
    const tempDate = new Date();
    const todayDate = `${tempDate.getFullYear()}${String(tempDate.getMonth() + 1).padStart(2, '0')}${String(tempDate.getDate()).padStart(2, '0')}`;
    let taskDate = task.date;
    if (task.due < Infinity) {
        taskDate = `${task.due.getFullYear()}${String(task.due.getMonth() + 1).padStart(2, '0')}${String(task.due.getDate()).padStart(2, '0')}`;
    }
    return (todayDate - taskDate < 0 && todayDate - taskDate >= -7);
}

function dueLater(task) {
    const tempDate = new Date();
    const todayDate = `${tempDate.getFullYear()}${String(tempDate.getMonth() + 1).padStart(2, '0')}${String(tempDate.getDate()).padStart(2, '0')}`;
    let taskDate = task.date;
    if (task.due < Infinity) {
        taskDate = `${task.due.getFullYear()}${String(task.due.getMonth() + 1).padStart(2, '0')}${String(task.due.getDate()).padStart(2, '0')}`;
    }
    console.log(todayDate - taskDate);
    return (todayDate - taskDate < -7 && todayDate - taskDate);
}

function populateTasks(taskList, container) {
    for (let task in taskList) {
        const taskIndex = getTaskIndex(taskList, taskList[task].title);

        // if (!('tasks' in taskList[taskIndex])) {
            const taskItem = document.createElement('li');
            const taskTitle = document.createElement('span');
            const taskPriority = document.createElement('span');
            const taskDue = document.createElement('span');
            const taskDueExact = document.createElement('span');
            const taskStatus = document.createElement('span');
            const taskProject = document.createElement('span');
            const taskTags = document.createElement('span');
            const taskEdit = document.createElement('span');
            const taskNotes = document.createElement('p');
            const taskDelete = document.createElement('span');
            const taskControls = document.createElement('div');

            taskItem.classList.add('task');
            taskItem.id = taskList[task].title;
            taskTitle.classList.add('title');
            taskPriority.classList.add('priority');
            taskDue.classList.add('due');
            taskDueExact.classList.add('exact-due')
            taskStatus.classList.add('status');
            taskProject.classList.add('task-project');
            taskTags.classList.add('tags');
            taskEdit.classList.add('edit');
            taskNotes.classList.add('notes');
            taskDelete.classList.add('delete');
            taskControls.classList.add('task-controls');

            taskProject.style.display = 'none';
            taskTags.style.display = 'none';
            taskDueExact.style.display = 'none';
            taskNotes.style.display = 'none';
            taskControls.style.display = 'none';
        
            taskTitle.textContent = taskList[task].title;
            taskEdit.textContent = '✒️';
            taskNotes.textContent = taskList[task].notes;
            taskDelete.textContent = '🗑️'
        
            if (taskList[task].priority === 1) {
                taskItem.setAttribute('priority', 'high')
            } else if (taskList[task].priority === -1) {
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
                if (taskList[task].due.setHours(0,0,0,0) < today.setHours(0,0,0,0)) {
                    taskDue.textContent = 'Late!';
                    taskDue.classList.add('late');
                } else if (taskList[task].due.setHours(0,0,0,0) == today.setHours(0,0,0,0)) {
                    taskDue.textContent = 'Today';
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
            taskItem.appendChild(taskNotes);
            taskControls.appendChild(taskEdit);
            taskControls.appendChild(taskDelete);
            taskItem.appendChild(taskControls);
        // }
    }
}

function expandTask(taskListItem) {
    const taskProject = taskListItem.querySelector('.task-project');
    const taskTags = taskListItem.querySelector('.tags');
    const taskExactDue = taskListItem.querySelector('.exact-due');
    const taskNotes = taskListItem.querySelector('.notes');
    const taskControls = taskListItem.querySelector('.task-controls');

    if (taskProject.style.display == 'inline') {
        taskProject.style.display = 'none';
        taskTags.style.display = 'none';
        taskExactDue.style.display = 'none';
        taskNotes.style.display = 'none';
        taskControls.style.display = 'none';
    } else {
        taskProject.style.display = 'inline';
        taskTags.style.display = 'flex';
        taskExactDue.style.display = 'inline';
        taskNotes.style.display = 'block';
        taskControls.style.display = 'flex';
    }
}

function deleteTaskDOM(taskListItem) {
    taskListItem.setAttribute('deleted', 'true');
}

export { populateTasksFiltered, noProjects, justProjects, dueToday, dueSoon, dueLater, populateTasks, expandTask, deleteTaskDOM };