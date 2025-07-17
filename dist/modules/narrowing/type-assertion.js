export const bootstrap = () => {
    const body = document.querySelector('body');
    const video = document.querySelector('#promo');
    const input = document.querySelector('.textinput');
    video.volume;
    if (input) {
        input.addEventListener('blur', (event) => {
            alert('teste');
        });
    }
};
