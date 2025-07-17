export const bootstrap = () => {
    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');
    //   Leitura segura
    console.log('title: ', title?.innerHTML);
    console.log('subtitle: ', subtitle?.innerText);
    console.log('subtitle color: ', subtitle?.style.color);
    if (subtitle) {
        subtitle.style.color = 'grey';
    }
};
