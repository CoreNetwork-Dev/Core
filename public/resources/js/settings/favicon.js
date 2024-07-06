function updatePage() {
    const titleInput = document.getElementById('titleInput').value;
    if (titleInput) {
        document.title = titleInput;
    }

    const faviconInput = document.getElementById('faviconInput').value;
    if (faviconInput) {
        const faviconLink = document.getElementById('favicon');
        faviconLink.href = faviconInput;
    }
}
