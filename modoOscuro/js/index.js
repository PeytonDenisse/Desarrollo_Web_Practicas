document.addEventListener('DOMContentLoaded', () => {
    const switchButton = document.getElementById('switch');
    const body = document.body;

    switchButton.addEventListener('change', () => {
        body.classList.toggle('oscuro');
    });
});