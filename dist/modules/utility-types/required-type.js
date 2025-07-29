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
    // Type Assertion
    publishArticle(draft);
    function publishArticle(article) {
        console.log('Publicando o artigo: ', article);
    }
    publishArticle(completeArticle);
    //   Article = article
    //  Article != Requiered<article>
};
