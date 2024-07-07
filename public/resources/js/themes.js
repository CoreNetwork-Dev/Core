function setTheme(theme) {
    document.body.setAttribute('theme', theme);
    localStorage.setItem('theme', theme);
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'main';
    document.body.setAttribute('theme', savedTheme);
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
        themeSelect.value = savedTheme;
        themeSelect.addEventListener('change', () => {
            setTheme(themeSelect.value);
        });
    }
}

initTheme();
