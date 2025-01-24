import { getTasksFromStorage } from './storage.js';
import { renderTasks } from './viewalltasks.js';

export function searchTasks(query) {
    const tasks = getTasksFromStorage();
    const filteredTasks = tasks.filter(task => 
        task.title.toLowerCase().includes(query.toLowerCase()) || 
        task.description.toLowerCase().includes(query.toLowerCase())
    );
    renderTasks(filteredTasks);
}
