// Preview Toggle functionality
document.querySelectorAll('.toggle-preview').forEach(button => {
    button.addEventListener('click', function () {
        const preview = this.previousElementSibling;
        preview.classList.toggle('hidden');
        this.textContent = preview.classList.contains('hidden') ? 'Show More' : 'Show Less';
    });
});

// Theme Toggle functionality with persistence
const toggleThemeButton = document.getElementById('toggle-theme');
const setTheme = (isDarkMode) => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.querySelector('header').classList.toggle('dark-mode', isDarkMode);
    document.querySelector('footer').classList.toggle('dark-mode', isDarkMode);
    toggleThemeButton.textContent = `Switch to ${isDarkMode ? 'Light Mode' : 'Dark Mode'}`;
};

// Initialize theme from localStorage
const isDarkMode = localStorage.getItem('dark-mode') === 'true';
setTheme(isDarkMode);

// Handle theme toggle click
toggleThemeButton.addEventListener('click', function () {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    setTheme(isDarkMode);
    localStorage.setItem('dark-mode', isDarkMode); // Save theme preference
});
