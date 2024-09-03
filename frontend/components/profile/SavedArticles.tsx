import { ArticleProps } from '@/types/articles';
import { Text } from 'react-native';
import Article from '../articles-to-change/Article';

interface SavedArticlesProps {
  savedArticles: ArticleProps[];
}

const SavedArticles = ({ savedArticles }: SavedArticlesProps) => {
  return (
    <>
      <Text className="text-xl ml-5 font-bold">Saved Articles</Text>
      {savedArticles.map((article: ArticleProps, index: number) => (
        <Article
          key={index}
          title={article.title}
          article_id={article.article_id}
          saved={article.saved}
          description={article.description}
          image_url={article.image_url}
        />
      ))}
    </>
  );
};

export default SavedArticles;
