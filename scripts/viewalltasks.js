import { getTasksFromStorage } from './storage.js';
import { updateStatistics } from './updatestats.js';
import { markAsComplete } from './completetask.js';
import { deleteTask } from './deletetask.js';

export function renderTasks(filter = 'all') {
    const tasks = getTasksFromStorage();
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = ''; 

    const filteredTasks = tasks.filter(task => 
        filter === 'all' || 
        (filter === 'active' && !task.completed) || 
        (filter === 'completed' && task.completed)
    );

    filteredTasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <div class="task-details">
                <strong>${task.title}</strong>
                <p>${task.description || ''}</p>
                <span>${task.dueDate || ''}</span>
                <span class="status-dot ${task.completed ? 'completed' : 'in-progress'}"></span>
            </div>
            <div class="task-actions">
                <button class="complete-task-btn">${task.completed ? 'Undo' : 'Complete'}</button>
                <button class="delete-task-btn">Delete</button>
            </div>
        `;
        
        taskItem.querySelector('.complete-task-btn').addEventListener('click', () => {
            markAsComplete(task.id);
            renderTasks(filter);
        });

        taskItem.querySelector('.delete-task-btn').addEventListener('click', () => {
            deleteTask(task.id);
            renderTasks(filter);
        });

        taskListElement.appendChild(taskItem);
    });

    updateStatistics();
}
