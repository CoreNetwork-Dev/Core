document.addEventListener('DOMContentLoaded', () => {
    const keyInput = document.getElementById('key');
    const urlInput = document.getElementById('url');
    const form = document.getElementById('redirectForm');
    const resetButton = document.getElementById('resetButton');

    function loadRedirects() {
        const redirects = JSON.parse(localStorage.getItem('redirects')) || [];
        return redirects;
    }

    function saveRedirect(key, url) {
        const redirects = loadRedirects();
        redirects.push({ key, url });
        localStorage.setItem('redirects', JSON.stringify(redirects));
    }

    function clearRedirects() {
        localStorage.removeItem('redirects');
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const redirectKey = keyInput.value.toLowerCase();
        let redirectUrl = urlInput.value;

        if (redirectKey === '/') {
            alert('The key "/" is disabled, for it is to toggle the navbar. Try another one.');
            return;
        }

        if (!/^https?:\/\//i.test(redirectUrl)) {
            redirectUrl = 'https://' + redirectUrl;
        }

        saveRedirect(redirectKey, redirectUrl);

        alert(`Redirect set successfully. Press "${redirectKey.toUpperCase()}" to go to "${redirectUrl}".`);

        keyInput.value = '';
        urlInput.value = '';
    });

    resetButton.addEventListener('click', () => {
        clearRedirects();
        alert('Reset the redirects.');
    });

    document.addEventListener('keydown', (e) => {
        const redirects = loadRedirects();
        redirects.forEach(({ key, url }) => {
            if (e.key.toLowerCase() === key) {
                location.replace(url);
            }
        });
    });
});