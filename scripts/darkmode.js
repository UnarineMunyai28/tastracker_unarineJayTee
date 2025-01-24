// Select the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Default theme
const defaultTheme = {
  background: '#ffffff',
  text: '#333333',
  sidebar: '#2c3e50',
  button: '#3498db',
  buttonHover: '#2980b9',
};

// Dark theme
const darkTheme = {
  background: '#2c3e50',
  text: '#ffffff',
  sidebar: '#1a252f',
  button: '#34495e',
  buttonHover: '#2c3e50',
};

// Custom theme
let customTheme = {
  background: '#DA2B2B',
  text: '#ffffff',
  sidebar: '#932525',
  button: '#6a0dad',
  buttonHover: '#550a8a',
};

// Function to calculate text color based on background
function getVisibleTextColor(backgroundColor) {
  const r = parseInt(backgroundColor.substring(1, 3), 16);
  const g = parseInt(backgroundColor.substring(3, 5), 16);
  const b = parseInt(backgroundColor.substring(5, 7), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
}

// Apply the theme
function applyTheme(theme) {
  document.body.style.backgroundColor = theme.background;
  document.body.style.color = getVisibleTextColor(theme.background);

  const sidebar = document.querySelector('.sidebar');
  const buttons = document.querySelectorAll('button');

  if (sidebar) {
    sidebar.style.backgroundColor = theme.sidebar;
    sidebar.style.color = getVisibleTextColor(theme.sidebar);
  }

  buttons.forEach((button) => {
    button.style.backgroundColor = theme.button;
    button.style.color = getVisibleTextColor(theme.button);
    button.onmouseover = () => {
      button.style.backgroundColor = theme.buttonHover;
      button.style.color = getVisibleTextColor(theme.buttonHover);
    };
    button.onmouseleave = () => {
      button.style.backgroundColor = theme.button;
      button.style.color = getVisibleTextColor(theme.button);
    };
  });
}

// Save theme to localStorage
function saveThemePreference(themeName) {
  localStorage.setItem('theme', themeName);
}

// Load theme from localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    applyTheme(darkTheme);
  } else if (savedTheme === 'custom') {
    applyTheme(customTheme);
  } else {
    applyTheme(defaultTheme);
  }
}

// Toggle between themes
function toggleDarkMode() {
  const currentTheme = localStorage.getItem('theme');
  if (!currentTheme || currentTheme === 'default') {
    applyTheme(darkTheme);
    saveThemePreference('dark');
    if (darkModeToggle) darkModeToggle.textContent = 'Switch to Custom Theme';
  } else if (currentTheme === 'dark') {
    applyTheme(customTheme);
    saveThemePreference('custom');
    if (darkModeToggle) darkModeToggle.textContent = 'Switch to Light Mode';
  } else {
    applyTheme(defaultTheme);
    saveThemePreference('default');
    if (darkModeToggle) darkModeToggle.textContent = 'Switch to Dark Mode';
  }
}

// Allow updating custom theme
function updateCustomTheme(background, sidebar, button) {
  customTheme = { background, sidebar, button };
  applyTheme(customTheme);
  saveThemePreference('custom');
}

// Add event listener for dark mode toggle
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', toggleDarkMode);
}

// Load the theme on page load
document.addEventListener('DOMContentLoaded', loadTheme);

// Export the required functions for main.js
export { toggleDarkMode, updateCustomTheme, loadTheme, applyTheme };

