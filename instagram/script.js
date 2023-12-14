// Elements
const toggleThemeBtn = document.querySelector('.head-theme-btn');

// Toggle theme button
toggleThemeBtn.addEventListener('click', () => {
    // Toggle root class
    document.documentElement.classList.toggle('darkTheme');
});