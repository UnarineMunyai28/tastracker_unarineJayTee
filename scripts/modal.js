import { addTask } from './addtask.js';

const modal = document.getElementById('taskModal');

export function openModal() {
    modal.style.display = 'flex';
}

export function closeModal() {
    modal.style.display = 'none';
}

document.getElementById('submitTaskBtn').addEventListener('click', () => {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('taskDueDate').value;

    if (title) {
        addTask(title, description, dueDate);
        closeModal();
    } else {
        alert('Task title is required.');
    }
});
