const themeSelect = document.getElementById('theme-select');

themeSelect.addEventListener('change', () => {
    const selectedTheme = themeSelect.value;
    document.body.setAttribute('theme', selectedTheme);
    localStorage.setItem('theme', selectedTheme);
});

document.body.setAttribute('theme', localStorage.getItem('theme') || 'main');
themeSelect.value = localStorage.getItem('theme') || 'main';
