/* dark mode */

// Elements
const toggleThemeBtn = document.querySelector('.head-theme-btn');

document.onload = setIntervalTheme(localStorage.getItem('theme'));
function setIntervalTheme(themeKey) {
    if(themeKey === 'dark') {
        document.documentElement.classList.add('darkTheme');
    } else {
        document.documentElement.classList.remove('darkTheme');
    }
}

// Toggle theme button
toggleThemeBtn.addEventListener('click', () => {
    // Toggle root class
    document.documentElement.classList.toggle('darkTheme');
    // click -> save localStorage
    if(document.documentElement.classList.contains('darkTheme')) {
        localStorage.setItem('theme','dark');
    } else {
        localStorage.setItem('theme','light');
    }
});