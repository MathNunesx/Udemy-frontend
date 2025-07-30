export const bootstrap = (): void => {
  interface Article {
    title: string;
    subtitle?: string;
  }

  const articles: Readonly <Article>[] = [
    { title: 'Omit' },
    { title: 'Partial' },
    { title: 'Required ', subtitle: 'Propriedades Obrigatórias' },
    { title: 'Readonly', subtitle: 'Propriedades apenas leitura' },
  ];

  console.log(articles);
};
