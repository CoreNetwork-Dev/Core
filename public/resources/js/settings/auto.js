if (localStorage.getItem('aboutBlank') === 'enabled') {
    let isInFrame;
    try {
        isInFrame = window !== top;
    } catch (error) {
        isInFrame = true;
    }

    if (!isInFrame && !navigator.userAgent.includes('Firefox')) {
        const popupWindow = open('about:blank', '_blank');
        if (!popupWindow || popupWindow.closed) {
            alert('Failed to cloak the site. Please allow popups and try again.');
        } else {
            const popupDocument = popupWindow.document;
            const iframeElement = popupDocument.createElement('iframe');
            const linkElement = popupDocument.createElement('link');
            const savedName = localStorage.getItem('name') || 'NASA';
            const savedIcon = localStorage.getItem('icon') || 'https://www.nasa.gov/wp-content/plugins/nasa-hds-core-setup/assets/favicons/apple-touch-icon-152x152.png';

            popupDocument.title = savedName;
            linkElement.rel = 'icon';
            linkElement.href = savedIcon;

            Object.assign(iframeElement.style, {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                border: 'none',
                outline: 'none',
                width: '100%',
                height: '100%',
            });

            iframeElement.src = location.href;

            popupDocument.head.appendChild(linkElement);
            popupDocument.body.appendChild(iframeElement);

            location.replace('https://nasa.gov');
        }
    }
}

if (localStorage.getItem('leaveConfirmation') === 'enabled') {
    window.onbeforeunload = () => '';
}

function enableAboutBlank() {
    localStorage.setItem('aboutBlank', 'enabled');
    window.location.reload();
}

function disableAboutBlank() {
    localStorage.setItem('aboutBlank', 'disabled');
    window.location.reload();
}