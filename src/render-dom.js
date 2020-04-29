export default function renderDom() {
    const content = document.getElementById('content');

        const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = 'ToDo List';
        content.appendChild(title);

        const allTasks = document.createElement('div');
        allTasks.classList.add('all-tasks');

            const taskListTitle = document.createElement('h2');
            taskListTitle.classList.add('task-list-title');
            taskListTitle.textContent = 'My Lists';
            allTasks.appendChild(taskListTitle);

            const taskList = document.createElement('ul');
            taskList.classList.add('task-list');
            taskListTitle.setAttribute('data-list', '');
            allTasks.appendChild(taskList);

            const listForm = document.createElement('form');
            listForm.setAttribute('action', '');
            listForm.setAttribute('data-new-list-form', '');

                const newList = document.createElement('input');
                newList.setAttribute('type', 'text');
                newList.setAttribute('placeholder', 'new list name');
                newList.setAttribute('aria-label', 'new list name');
                newList.setAttribute('data-new-list-input', '');
                newList.classList.add('new', 'list');
                listForm.appendChild(newList);

                const newListButton = document.createElement('button');
                newListButton.setAttribute('aria-label', 'create new list');
                newListButton.classList.add('btn', 'create');
                newListButton.textContent = '+';
                listForm.appendChild(newListButton);

            allTasks.appendChild(listForm);
    
        content.appendChild(allTasks)

        const todoList = document.createElement('div');
        todoList.classList.add('todo-list');
        todoList.setAttribute('data-list-display-container', '');

            const todoHeader = document.createElement('div');
            todoHeader.classList.add('todo-header');

                const listTitle = document.createElement('h2');
                listTitle.classList.add('list-title');
                listTitle.setAttribute('data-list-title', '');
                todoHeader.appendChild(listTitle);

                const taskCount = document.createElement('p');
                taskCount.classList.add('task-count');
                taskCount.setAttribute('data-list-count', '');
                todoHeader.appendChild(taskCount);

            todoList.appendChild(todoHeader);

            const todoBody = document.createElement('div');
            todoBody.classList.add('todo-body');

                const tasks = document.createElement('div');
                tasks.classList.add('tasks');
                tasks.setAttribute('data-tasks', '');
                todoBody.appendChild(tasks);

                const newTaskCreator = document.createElement('div');
                newTaskCreator.classList.add('new-task-creator');

                    const taskForm = document.createElement('form');
                    taskForm.setAttribute('action', '');
                    taskForm.setAttribute('data-new-task-form', '');

                        const newTask = document.createElement('input');
                        newTask.setAttribute('type', 'text');
                        newTask.setAttribute('placeholder', 'new task name');
                        newTask.setAttribute('aria-label', 'new task name');
                        newTask.setAttribute('data-new-task-input', '');
                        newTask.classList.add('new', 'task');
                        taskForm.appendChild(newTask);

                        const newTaskButton = document.createElement('button');
                        newTaskButton.setAttribute('aria-label', 'create new task');
                        newTaskButton.classList.add('btn', 'create');
                        newTaskButton.textContent = '+';
                        taskForm.appendChild(newTaskButton);

                    newTaskCreator.appendChild(taskForm);

                todoBody.appendChild(newTaskCreator);

                const deleteStuff = document.createElement('div');
                deleteStuff.classList.add('delete-stuff');

                    const delete1 = document.createElement('button');
                    delete1.classList.add('btn', 'delete');
                    delete1.setAttribute('data-clear-complete-tasks-button', '');
                    delete1.textContent = 'Clear completed tasks';
                    deleteStuff.appendChild(delete1);

                    const delete2 = document.createElement('button');
                    delete2.classList.add('btn', 'delete');
                    delete2.setAttribute('data-delete-list-button', '');
                    delete2.textContent = 'Delete list';
                    deleteStuff.appendChild(delete2);

                todoBody.appendChild(deleteStuff);                        

            todoList.appendChild(todoBody);

        content.appendChild(todoList); 
        
        const template = document.createElement('template');
        template.id = 'task-template';

            const task = document.createElement('div');
            task.classList.add('task');

                const checkInput = document.createElement('input');
                checkInput.setAttribute('type', 'checkbox');
                task.appendChild(checkInput);

                const checkLabel = document.createElement('label');
                checkLabel.innerHTML = '<span class="custom-checkbox"></span>';
                task.appendChild(checkLabel);

            template.appendChild(task);

        content.appendChild(template);
}