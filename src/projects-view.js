import { getTaskIndex, sortTasks } from "./task";
import { populateTasksFiltered, noProjects } from "./tasks-view";

function populateProjects(taskList, container) {
    for (let task in taskList) {
        const taskIndex = getTaskIndex(taskList, taskList[task].title);

        if ('tasks' in taskList[taskIndex]) {
            const taskItem = document.createElement('li');
            const taskTitle = document.createElement('span');
            const taskPriority = document.createElement('span');
            const taskDue = document.createElement('span');
            const taskDueExact = document.createElement('span');
            const taskProject = document.createElement('span');
            const taskTags = document.createElement('span');
            const taskEdit = document.createElement('span');
            const taskNotes = document.createElement('p');
            const taskDelete = document.createElement('span');
            const taskControls = document.createElement('div');
            const projectTasks = document.createElement('ul');

            taskItem.classList.add('task');
            taskItem.id = taskList[task].title;
            taskTitle.classList.add('title');
            taskPriority.classList.add('priority');
            taskDue.classList.add('due');
            taskDueExact.classList.add('exact-due');
            taskProject.classList.add('task-project');
            taskTags.classList.add('tags');
            taskEdit.classList.add('edit');
            taskNotes.classList.add('notes');
            taskDelete.classList.add('delete');
            taskControls.classList.add('task-controls');
            projectTasks.classList.add('project-tasks');

            taskProject.style.display = 'none';
            taskTags.style.display = 'none';
            taskDueExact.style.display = 'none';
            taskNotes.style.display = 'none';
            taskControls.style.display = 'none';
            projectTasks.style.display = 'none';
        
            taskTitle.textContent = taskList[task].title;
            taskEdit.textContent = '✎';
            taskNotes.textContent = taskList[task].notes;
            taskDelete.textContent = '⊗'
        
            if (taskList[task].priority === 1) {
                taskItem.setAttribute('priority', 'high')
            } else if (taskList[task].priority === -1) {
                taskItem.setAttribute('priority', 'low')
            } else {
                taskPriority.textContent = ' ';
            }
            
            if (taskList[task].due === Infinity || taskList[task].due === null) {
                taskDue.textContent = ' ';
                taskDueExact.textContent = ' ';
            } else {
                const today = new Date();
                const oneWeek = new Date();
                const dueDate = new Date(taskList[task].due)
                oneWeek.setDate(today.getDate() + 7);
                if (dueDate.setHours(0,0,0,0) < today.setHours(0,0,0,0)) {
                    taskDue.textContent = 'Late!';
                    taskDue.classList.add('late');
                } else if (dueDate.setHours(0,0,0,0) == today.setHours(0,0,0,0)) {
                    taskDue.textContent = 'Today';
                    taskDue.classList.add('today');
                } else if (dueDate.setHours(0,0,0,0) <= oneWeek.setHours(0,0,0,0)) {
                    taskDue.textContent = 'Soon';
                    taskDue.classList.add('this-week');
                } else {
                    taskDue.textContent = 'Later';
                    taskDue.classList.add('later');
                }
                taskDueExact.textContent = `${dueDate.getFullYear()}-${dueDate.getMonth()+1}-${dueDate.getDate()}`
            }
        
            if (taskList[task].done === true) {
                taskItem.setAttribute('done', 'true');
            } else {
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

            if (taskList[task].tasks.length > 0) {
                sortTasks(taskList[task].tasks)
                populateTasksFiltered(taskList[task].tasks, projectTasks, noProjects);
            }
            
            container.appendChild(taskItem);
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
            taskItem.appendChild(projectTasks);
        }
    }
}

export { populateProjects };