# Todo List

A todo list webapp, built as part of The Odin Project. See the [project assignment page](https://www.theodinproject.com/lessons/node-path-javascript-todo-list) for more details.

## Inspiration

- [Things](https://culturedcode.com/things/)
- [SimplyDone](https://dot-sky.github.io/todo-app/)
- [Todo List](https://michalosman.github.io/todo-list/)
- [WhatToDo](https://khunhour.github.io/todo_list/)

## Features/Ideas

- Light & dark mode
- Mobile first design
- Tasks, projects, and tags
- Everything is editable
- Tasks can be upgraded to projects
- Projects containing only one task can be downgraded to tasks
- Projects and tasks must have titles
- Projects and tasks can have notes
- Projects and tasks can have due dates
- An unset task's due date equals the parent project's due date
- Tasks and projects can have priorities
- Tasks and projects can be members of any number of tags, with tasks inheriting from their parent project
- Tasks can be added to projects and tags at time of creation
- When a task is turned into a project, it is still part of its parent project
- Tasks created within projects are automatically part of that project (inheriting its due date and tags by default)
- Everything should be stored locally
 - See [the mdn documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) and [this freeCodeCamp article](https://www.freecodecamp.org/news/use-local-storage-in-modern-applications/)
- Consider an export and import function
- In all sections, sorting is prioritized: due date > priority > alphabetically
- The menu is organized: 
    - **Tasks** > (an expandable list of all tasks)
    - **Projects** > (an expandible list of all projects)
    - **Tags** > (an expandible list of all tags)

## Todo (isn't that meta?)

- [x] Initial setup
    - [x] npm init
    - [x] install webpack and plugins
    - [x] setup configs
    - [x] make initial files
    - [x] test
- [x] Write task class and functions
- [x] Write project class and functions
- [x] Write tag functions
- [x] Add done function (done/not done switch)
- [x] Add due date functions
- [x] Add eventListener and functions to populate DOM with tasks
- [x] Make checking and unchecking tasks work
- [x] Make expanding tasks work
- [x] Add delete button
- [x] Add adding tasks from button
- [x] Add adding project from button
- [x] Add views by due date
- [x] Add project views
- [x] Add edit functionality
- [x] Fix projects displaying duplicates of task after editing task
- [x] Fix localstorage not saving
- [x] Done?
- [ ] Squash bugs?
- [ ] Add features?
- [ ] Refactor code?

## Project Retrospective

