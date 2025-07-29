export const bootstrap = (): void =>{
     interface Article {
    title: string;
    subtitle: string;
    description: string;
    createdAt: Date;
    public: boolean;
  }

  type ArticleType = {
    title: string;
    subtitle: string;
    description: string;
    createdAt: Date;
    public: boolean;
  };

  interface PartialArticle extends Partial<Article>{}
  

  let draft: PartialArticle = {
    title: 'Jovones'
  }

  draft.subtitle = 'Opcionais'

  console.log(draft)
}