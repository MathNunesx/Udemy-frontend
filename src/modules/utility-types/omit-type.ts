export const bootstrap = (): void => {
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

  interface ArticlePreview
    extends Omit<ArticleType, 'subtitle' | 'description'> {}

  type ArticlePreviewType = Omit<ArticleType, 'subtitle' | 'description'>;

  const articlePreview: ArticlePreview = {
    title: 'Javão',
    createdAt: new Date('1990-12-19'),
    public: true,
  };
};

