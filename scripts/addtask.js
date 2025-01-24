import { getTasksFromStorage, saveTasksToStorage } from './storage.js';
import { renderTasks } from './viewalltasks.js';

export function addTask(title, description, dueDate) {
    const tasks = getTasksFromStorage();
    const newTask = {
        id: Date.now(),
        title,
        description,
        dueDate,
        completed: false,
    };
    tasks.push(newTask);
    saveTasksToStorage(tasks);
    renderTasks('all');
}
