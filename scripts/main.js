var header = document.getElementById('header');
const headerlinks = header.querySelectorAll('.header-link');

window.addEventListener('scroll', () => {
    var scroll = window.scrollY
    if (scroll > 15) {
        header.style.background = 'var(--header-background)'
    } else {
        header.style.backgroundColor = 'transparent'
        header.style.background = 'transparent'
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);
    themeToggleBtn.textContent = currentTheme === 'dark' ? 'Tema Claro' : 'Tema Oscuro';

    themeToggleBtn.addEventListener('click', () => {
        const newTheme = htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', newTheme);

        themeToggleBtn.textContent = newTheme === 'dark' ? 'Tema Claro' : 'Tema Oscuro';
        localStorage.setItem('theme', newTheme);
    });
});
