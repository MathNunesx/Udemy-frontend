export const bootstrap = () => {
    const input = document.querySelector('.inputText');
    const video = document.querySelector('#video');
    input.addEventListener('click', (event) => {
        console.log('Input clicado!! ');
    });
    console.log('filho de:', input.parentNode);
    console.log('Element: ', input.id, input.className, input.tagName);
    console.log('Arrastavek: ', input.draggable);
    console.log('input: ', input.value);
    console.log('Video: ', video.volume);
};
