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

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el input del checkbox por su ID
    const themeToggleCheckbox = document.getElementById('themeToggleCheckbox');
    const htmlElement = document.documentElement; // El elemento <html> donde aplicamos el data-theme

    // Función para actualizar el atributo data-theme y el estado del checkbox
    function updateThemeUI(theme) {
        htmlElement.setAttribute('data-theme', theme);

        // Si el tema es 'dark', el checkbox debe estar marcado (true)
        // Si el tema es 'light', el checkbox debe estar desmarcado (false)
        themeToggleCheckbox.checked = (theme === 'dark');

        localStorage.setItem('theme', theme); // Guardamos la preferencia en localStorage
    }

    // Inicializar el tema al cargar la página
    const initialTheme = localStorage.getItem('theme') || 'light';
    updateThemeUI(initialTheme); // Llama a la función para establecer el tema inicial y el estado del checkbox

    // Escuchar el evento 'change' en el checkbox
    themeToggleCheckbox.addEventListener('change', () => {
        // Determinamos el nuevo tema basándonos en si el checkbox está marcado o no
        const newTheme = themeToggleCheckbox.checked ? 'dark' : 'light';
        updateThemeUI(newTheme); // Llama a la función para actualizar el tema y el estado del checkbox
    });
});