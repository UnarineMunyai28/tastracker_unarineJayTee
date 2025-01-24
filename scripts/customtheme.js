let customTheme = {
  background: '#4b0082',
  text: '#ffffff',
  sidebar: '#3a005f',
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

// Function to apply the custom theme
function applyCustomTheme() {
  document.body.style.backgroundColor = customTheme.background;
  document.body.style.color = getVisibleTextColor(customTheme.background);

  const sidebar = document.querySelector('.sidebar');
  const buttons = document.querySelectorAll('button');

  if (sidebar) {
    sidebar.style.backgroundColor = customTheme.sidebar;
    sidebar.style.color = getVisibleTextColor(customTheme.sidebar);
  }

  buttons.forEach((button) => {
    button.style.backgroundColor = customTheme.button;
    button.style.color = getVisibleTextColor(customTheme.button);
    button.onmouseover = () => {
      button.style.backgroundColor = customTheme.buttonHover;
      button.style.color = getVisibleTextColor(customTheme.buttonHover);
    };
    button.onmouseleave = () => {
      button.style.backgroundColor = customTheme.button;
      button.style.color = getVisibleTextColor(customTheme.button);
    };
  });
}

// Function to update the custom theme dynamically
function updateCustomTheme(background, sidebar, button, buttonHover) {
  customTheme = { background, sidebar, button, buttonHover };
  applyCustomTheme();
  saveCustomThemePreference();
}

// Save the custom theme to localStorage
function saveCustomThemePreference() {
  localStorage.setItem('customTheme', JSON.stringify(customTheme));
}

// Load the custom theme from localStorage
function loadCustomTheme() {
  const savedCustomTheme = localStorage.getItem('customTheme');
  if (savedCustomTheme) {
    customTheme = JSON.parse(savedCustomTheme);
    applyCustomTheme();
  }
}

// Export the functions to be used in other files
export { applyCustomTheme, updateCustomTheme, loadCustomTheme };
