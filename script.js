document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('task-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById('task-list');

    const listItem = document.createElement('li');
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editTask(taskContent);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(listItem);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = () => completeTask(listItem);

    listItem.appendChild(taskContent);
    listItem.appendChild(completeButton);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
}

function completeTask(listItem) {
    listItem.classList.toggle('completed');
}

function deleteTask(listItem) {
    listItem.remove();
}

function editTask(taskContent) {
    const newTaskText = prompt('Edit your task:', taskContent.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskContent.textContent = newTaskText;
    }
}
