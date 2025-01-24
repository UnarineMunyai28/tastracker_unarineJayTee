import { getTasksFromStorage, saveTasksToStorage } from './storage.js';

export function deleteTask(taskId) {
    const tasks = getTasksFromStorage();
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    saveTasksToStorage(updatedTasks);
}
