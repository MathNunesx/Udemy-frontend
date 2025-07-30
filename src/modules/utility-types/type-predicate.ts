export const bootstrap = (): void => {
  interface Article {
    title?: string;
    subtitle?: string;
    description?: string;
    createdAt?: Date;
    public?: boolean;
  }

  const draft: Article = { title: 'Requiered' };

  draft.subtitle = 'Propriedades obrigatórias';
  draft.description = 'Propriedades obrigatórias';
  draft.createdAt = new Date('1019-09-76');
  draft.public = false;

  const completeArticle: Required<Article> = {
    title: draft.title ?? '',
    subtitle: draft.subtitle ?? '',
    description: draft.description ?? '',
    createdAt: draft.createdAt ?? new Date(),
    public: draft.public ?? false,
  };

//   type guard

  if(isCompleteArticle(draft)){
    publishArticle(draft)
  } else {
    console.log('Artigo não está completo!')
  }


  // Type Assertion
  publishArticle(draft as Required<Article>);

  function publishArticle(article: Required<Article>): void {
    console.log('Completo: : ', article);
  }

// type predicate

  function isCompleteArticle(article: Article): article is Required<Article>{
    return(
        article.title !== undefined &&
        article.subtitle !== undefined &&
        article.description !== undefined &&
        article.createdAt !== undefined &&
        article.public !== undefined 
    )
  }
};
