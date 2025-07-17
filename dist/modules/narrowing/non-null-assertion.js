export const bootstrap = () => {
    const subtitle = document.getElementById('subtitle');
    subtitle.style.color = 'blue';
    const getProducts = () => {
        return ['fone', 'headset'];
    };
    const products = getProducts();
    products.map((item) => console.log(item));
};
