import { getTasksFromStorage, saveTasksToStorage } from './storage.js';

export function markAsComplete(taskId) {
    const tasks = getTasksFromStorage();
    const task = tasks.find(t => t.id === taskId);

    if (task) {
        task.completed = !task.completed; // Toggle completion status
        saveTasksToStorage(tasks);
    }
}
