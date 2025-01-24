import { toggleDarkMode, loadTheme, updateCustomTheme } from './darkmode.js';
import { openModal } from './modal.js';
import { renderTasks } from './viewalltasks.js';
import { searchTasks } from './search.js';

// Add event listeners after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addTaskButton').addEventListener('click', openModal);
  document.getElementById('viewAllTasksButton').addEventListener('click', () => renderTasks('all'));
  document.getElementById('activeTasksButton').addEventListener('click', () => renderTasks('active'));
  document.getElementById('completedTasksButton').addEventListener('click', () => renderTasks('completed'));
  document.getElementById('searchBar').addEventListener('input', (e) => searchTasks(e.target.value));

  // Initialize the dark mode toggle button
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }

  // Load the theme on page load
  loadTheme();

  // Example: Allow updating the custom theme dynamically (optional)
  const customThemeButton = document.getElementById('customThemeButton');
  if (customThemeButton) {
    customThemeButton.addEventListener('click', () => {
      const customBackground = '#ff6600';
      const customSidebar = '#ff4500';
      const customButton = '#ffa500';
      updateCustomTheme(customBackground, customSidebar, customButton);
    });
  }

  // Render tasks
  renderTasks('all');
});
