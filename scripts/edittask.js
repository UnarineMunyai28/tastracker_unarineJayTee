import { getTasksFromStorage, saveTasksToStorage } from './storage.js';

export function editTask(taskId, updatedData) {
    const tasks = getTasksFromStorage();
    const task = tasks.find(t => t.id === taskId);

    if (task) {
        task.title = updatedData.title || task.title;
        task.description = updatedData.description || task.description;
        task.dueDate = updatedData.dueDate || task.dueDate;

        saveTasksToStorage(tasks);
    }
}
