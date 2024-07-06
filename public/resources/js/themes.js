function setTheme(theme) {
    document.body.setAttribute('theme', theme);
    localStorage.setItem('theme', theme);
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'main';
    setTheme(savedTheme);
}

const themeSelect = document.getElementById('theme-select');
if (themeSelect) {
    themeSelect.addEventListener('change', () => {
        const selectedTheme = themeSelect.value;
        setTheme(selectedTheme);
    });
}

initTheme();
