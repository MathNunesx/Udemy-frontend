export const bootstrap = () => {
    const response = [
        { id: '454895748h', movie: 'Superman' },
        { id: '454895345348h', song: 'Californcation' },
        { id: '454835242', song: 'Perdição' },
    ];
    function showItems(items) {
        const body = document.querySelector('body');
        if (body instanceof HTMLBodyElement) {
            items.map((item) => {
                const itemELement = document.createElement('div');
                if ('song' in item) {
                    itemELement.textContent = item.song;
                    itemELement.style.background = 'cadetblue';
                }
                else if ('movie' in item) {
                    itemELement.textContent = item.movie;
                    itemELement.style.background = 'silver';
                }
                body.appendChild(itemELement);
            });
        }
    }
    showItems(response);
};
