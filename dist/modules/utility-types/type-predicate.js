export const bootstrap = () => {
    const draft = { title: 'Requiered' };
    draft.subtitle = 'Propriedades obrigatórias';
    draft.description = 'Propriedades obrigatórias';
    draft.createdAt = new Date('1019-09-76');
    draft.public = false;
    const completeArticle = {
        title: draft.title ?? '',
        subtitle: draft.subtitle ?? '',
        description: draft.description ?? '',
        createdAt: draft.createdAt ?? new Date(),
        public: draft.public ?? false,
    };
    //   type guard
    if (isCompleteArticle(draft)) {
        publishArticle(draft);
    }
    else {
        console.log('Artigo não está completo!');
    }
    // Type Assertion
    publishArticle(draft);
    function publishArticle(article) {
        console.log('Completo: : ', article);
    }
    // type predicate
    function isCompleteArticle(article) {
        return (article.title !== undefined &&
            article.subtitle !== undefined &&
            article.description !== undefined &&
            article.createdAt !== undefined &&
            article.public !== undefined);
    }
};
