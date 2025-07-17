export const bootstrap = (): void => {
  const subtitle = document.getElementById('subtitle')!;

    subtitle.style.color = 'blue'

  const getProducts = (): string[] | null => {
    return ['fone', 'headset'];
  };

  const products = getProducts()!;

  products.map((item) => console.log(item));
};
