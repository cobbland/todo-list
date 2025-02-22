class Task {
    title = undefined; // Must have a title
    due = Infinity; // If a due date is set, it should be in a valid date format
    priority = 0; // Can be `-1` for low, `0` for normal, or `1` for high priority
    notes = ''; // May have notes
    project = undefined // May be part of one project
    tags = []; // May have any number of tags
    done = false; // Can be `true` for done or `false` for not done

    constructor(title) {
        this.title = title;
    }
}

function modifyTask(taskList, taskTitle, key, value) {
    taskList.find((task) => task.title === taskTitle)[key] = value;
}

function deleteTask(taskList, taskTitle) {
    let taskIndex = getTaskIndex(taskList, taskTitle);
    if (taskIndex === -1) {
        return;
    }
    if ('tasks' in taskList[taskIndex]) {
        for (let task in taskList) {
            if (taskList[task].project === taskTitle) {
                modifyTask(taskList, taskList[task].title, 'project', undefined);
            }
        }
    }
    taskList.splice(taskIndex, 1);
    for (let task in taskList) {
        if ('tasks' in taskList[task]) {
            deleteTask(taskList[task].tasks, taskTitle);
        }
    }
}

function getTaskIndex(taskList, taskTitle) {
    return taskList.findIndex((task) => task.title === taskTitle);
}

function toggleDone(taskList, taskTitle) {
    let taskIndex = getTaskIndex(taskList, taskTitle);
    if (taskList[taskIndex].done) {
        taskList[taskIndex].done = false;
    } else {
        taskList[taskIndex].done = true;
        if ('tasks' in taskList[taskIndex]) {
            for (let task in taskList[taskIndex].tasks) {
                if (!taskList[taskIndex].tasks[task].done) {
                    toggleDone(taskList[taskIndex].tasks, taskList[taskIndex].tasks[task].title);
                }
            }
        }
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

function addDate(taskList, taskTitle, newDate) {
    let taskIndex = getTaskIndex(taskList, taskTitle);
    taskList[taskIndex].due = new Date(newDate);
}

function editNote(taskList, taskTitle, note) {
    const taskIndex = getTaskIndex(taskList, taskTitle);
    taskList[taskIndex].notes = note;
}

function sortTasks(taskList) {
    taskList.sort((a,b) => {
        if (a.done > b.done) {
            return 1;
        } else if (a.done < b.done) {
            return -1;
        } else {
            return a.due - b.due || b.priority - a.priority || a.title.localeCompare(b.title);
        }
    })
}

function addTaskToProject(taskList, taskTitle, projectTitle) {
    let taskIndex = taskList.indexOf(taskList.find((task) => task.title === taskTitle));
    let projectIndex = taskList.indexOf(taskList.find((project) => project.title === projectTitle));
    taskList[projectIndex].tasks.unshift(taskList[taskIndex]);
    taskList[taskIndex].project = taskList[projectIndex].title;
}

function removeTaskFromProject(taskList, taskTitle, projectTitle){
    let projectIndex = getTaskIndex(taskList, projectTitle);
    let taskIndexIn = getTaskIndex(taskList[projectIndex].tasks, taskTitle);
    let taskIndexOut = getTaskIndex(taskList, taskTitle);
    console.log(`from removeTaskFromProject...`)
    console.log(`taskIndexOut: ${taskIndexOut}`);
    console.log(`${taskList[taskIndexOut].title}`)
    taskList[taskIndexOut].project = undefined;
    taskList[projectIndex].tasks.splice(taskIndexIn, 1);
}

export { Task, modifyTask, deleteTask, getTaskIndex, toggleDone, addTag, removeTag, addDate, editNote, sortTasks, addTaskToProject, removeTaskFromProject };