export const bootstrap = (): void => {
  //   NULL

  let title = null;
  console.log('Title: ', title);
  console.log('Title (if): ', title ? 'verdadeiro' : 'falso');

  // UNDEFINED

  let subtitle = undefined;
  console.log('Subtitle: ', subtitle);
  console.log('Subtitle (if): ', subtitle ? 'verdadeiro' : 'falso');

  type Page = {
    title: string;
    subtitle?: string;
    handlerPage?: () => void;
  };

  const page: Page = {
    title: 'curso de typescript',
  };

  page.handlerPage = (): void => {
    console.log('Executou a função');
  };

  console.log('Page handlerPage: ', page.handlerPage);
};
