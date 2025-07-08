export const bootstrap = () => {
    //   NULL
    let title = null;
    console.log('Title: ', title);
    console.log('Title (if): ', title ? 'verdadeiro' : 'falso');
    // UNDEFINED
    let subtitle = undefined;
    console.log('Subtitle: ', subtitle);
    console.log('Subtitle (if): ', subtitle ? 'verdadeiro' : 'falso');
    const page = {
        title: 'curso de typescript',
    };
    page.handlerPage = () => {
        console.log('Executou a função');
    };
    console.log('Page handlerPage: ', page.handlerPage);
};
