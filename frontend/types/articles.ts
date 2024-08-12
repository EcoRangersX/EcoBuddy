export interface ArticleProps {
  title: string;
  article_id: number;
  description: string;
  image_url: string;
}

export interface FilteredArticleProps {
  article: { id: number; title: string; previewImageUrl: string };
}
