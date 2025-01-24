import { getTasksFromStorage } from './storage.js';

export function updateStatistics() {
    const tasks = getTasksFromStorage();
    document.getElementById('totalTasks').textContent = tasks.length;
    document.getElementById('inProgressTasks').textContent = tasks.filter(task => !task.completed).length;
    document.getElementById('completedTasks').textContent = tasks.filter(task => task.completed).length;
}
