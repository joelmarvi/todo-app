export default function render() {
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

                    const li1 = document.createElement('li');
                    li1.classList.add('list-name', 'active-list');
                    li1.textContent = 'Youtube';
                    taskList.appendChild(li1);

                    const li2 = document.createElement('li');
                    li2.classList.add('list-name');
                    li2.textContent = 'Work';
                    taskList.appendChild(li2);

                    const li3 = document.createElement('li');
                    li3.classList.add('list-name');
                    li3.textContent = 'Groceries';
                    taskList.appendChild(li3);

                allTasks.appendChild(taskList);

                const listForm = document.createElement('form');
                listForm.setAttribute('action', '');

                    const newList = document.createElement('input');
                    newList.setAttribute('type', 'text');
                    newList.setAttribute('placeholder', 'new list name');
                    newList.setAttribute('aria-label', 'new list name');
                    newList.classList.add('new', 'list');
                    listForm.appendChild(newList);

                    const newListButton = document.createElement('button');
                    newListButton.setAttribute('aria-label', 'create new list');
                    newListButton.classList.add('btn', 'create');
                    newListButton.textContent = '+';
                    listForm.appendChild(newListButton);

                allTasks.appendChild(listForm);

            const todoList = document.createElement('div');
            todoList.classList.add('todo-list');

                const todoHeader = document.createElement('div');
                todoHeader.classList.add('todo-header');

                    const listTitle = document.createElement('h2');
                    listTitle.classList.add('list-title');
                    listTitle.textContent = 'Youtube';
                    todoHeader.appendChild(listTitle);

                    const taskCount = document.createElement('p');
                    taskCount.classList.add('task-count');
                    taskCount.textContent = '3 tasks remaining';
                    todoHeader.appendChild(taskCount);

                todoList.appendChild(todoHeader);

                const todoBody = document.createElement('div');
                todoBody.classList.add('todo-body');

                    const tasks = document.createElement('div');
                    tasks.classList.add('tasks');

                        const task1 = document.createElement('div');
                        task1.classList.add('task');

                            const check1 = document.createElement('input');
                            check1.setAttribute('type', 'checkbox');
                            check1.id = 'task-1';
                            task1.appendChild(check1);

                            const label1 = document.createElement('label');
                            label1.setAttribute('for', 'task-1');
                            label1.innerHTML = '<span class="custom-checkbox"></span> Record todo list video';  
                            task1.appendChild(label1);

                        tasks.appendChild(task1);

                        const task2 = document.createElement('div');
                        task2.classList.add('task');

                            const check2 = document.createElement('input');
                            check2.setAttribute('type', 'checkbox');
                            check2.id = 'task-2';
                            task2.appendChild(check2);

                            const label2 = document.createElement('label');
                            label2.setAttribute('for', 'task-2');
                            label2.innerHTML = '<span class="custom-checkbox"></span> Another task';  
                            task2.appendChild(label2);

                        tasks.appendChild(task2);

                        const task3 = document.createElement('div');
                        task3.classList.add('task');

                            const check3 = document.createElement('input');
                            check3.setAttribute('type', 'checkbox');
                            check3.id = 'task-3';
                            task3.appendChild(check3);

                            const label3 = document.createElement('label');
                            label3.setAttribute('for', 'task-3');
                            label3.innerHTML = '<span class="custom-checkbox"></span> A third task';  
                            task3.appendChild(label3);

                        tasks.appendChild(task3);

                    todoBody.appendChild(tasks);

                    const newTaskCreator = document.createElement('div');
                    newTaskCreator.classList.add('new-task-creator');

                        const taskForm = document.createElement('form');
                        taskForm.setAttribute('action', '');

                            const newTask = document.createElement('input');
                            newTask.setAttribute('type', 'text');
                            newTask.setAttribute('placeholder', 'new task name');
                            newTask.setAttribute('aria-label', 'new task name');
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
                        delete1.textContent = 'Clear completed tasks';
                        deleteStuff.appendChild(delete1);

                        const delete2 = document.createElement('button');
                        delete2.classList.add('btn', 'delete');
                        delete2.textContent = 'Delete list';
                        deleteStuff.appendChild(delete2);

                    todoBody.appendChild(deleteStuff);                        

                todoList.appendChild(todoBody);

            
            content.appendChild(allTasks);
            content.appendChild(todoList);
  

            
            
}