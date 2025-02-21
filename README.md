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
- Tasks, projects, and categories
- Everything is editable
- Tasks can be upgraded to projects
- Projects containing only one task can be downgraded to tasks
- Projects and tasks must have titles
- Projects and tasks can have descriptions
- Projects and tasks can have notes
- Consider making descriptions and notes the same thing
- Projects and tasks can have due dates
- An unset project due date equals the latest task due date
- An unset task's due date equals the parent project's due date
- Tasks and projects can have priorities, with the same inheritance structure as above
- Tasks and projects can be members of any number of categories, with tasks inheriting from their parent project
- Tasks within projects are organized by category
- Tasks can be added to projects and categories at time of creation
- If not assigned to a project, a task is part of an invisible default project
- When a task is turned into a project, it is no longer part of its parent project
- Tasks created within projects are automatically part of that project (inheriting its due date and categories by default)
- Everything should be stored locally
 - See [the mdn documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) and [this freeCodeCamp article](https://www.freecodecamp.org/news/use-local-storage-in-modern-applications/)
- Consider an export and import function
- In all sections, sorting is prioritized: due date > priority > alphabetically
- The menu is organized: 
    - **Tasks** > Today > Upcoming (next 7 days) > All > Done
    - **Projects** > (an expandible list of all projects)
    - **Categories** > (an expandible list of all categories)

## Todo (isn't that meta?)

- [x] Initial setup
    - [x] npm init
    - [x] install webpack and plugins
    - [x] setup configs
    - [x] make initial files
    - [x] test
- [x] Write task class and functions
- [x] Write project class and functions
- [ ] Write tag functions
- [ ] ...