export interface ArticleProps {
  article_id: number;
  title: string;
  description: string;
  image_url: string;
  saved?: boolean;
}

export interface FilteredArticleProps {
  article: { id: number; title: string; previewImageUrl: string };
}
