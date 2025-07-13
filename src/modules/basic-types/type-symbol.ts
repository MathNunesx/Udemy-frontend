export const bootstrap = (): void => {
  // const title: symbol = Symbol('HOME')
  // const pegeTitle: symbol = Symbol('HOME')

  // if ('HOME' === 'HOME'){
  //     console.log('Sim, HOME é igual a HOME')
  // }

  const titleSymbol: symbol = Symbol('title');

  const Page = {
    title: 'HOME',
    [titleSymbol]: 'Pagina Principal',
  };

  console.log(Page.title);
  console.log(Page[titleSymbol]);

  console.log(Page);
};
