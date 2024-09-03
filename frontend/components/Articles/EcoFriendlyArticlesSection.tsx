import { View, Text } from 'react-native';
import Article from './Article';
import { ArticleProps } from '@/types/articles';

interface EcoFriendlyArticlesSectionProps {
  articles: ArticleProps[];
}

/**
 * Renders a section for displaying eco-friendly articles.
 *
 * @component
 * @param {Object[]} articles - The array of articles to be displayed.
 * @param {number} articles[].article_id - The ID of the article.
 * @param {string} articles[].description - The description of the article.
 * @param {string} articles[].title - The title of the article.
 * @param {string} articles[].image_url - The URL of the article's image.
 * @returns {JSX.Element} The rendered EcoFriendlyArticlesSection component.
 */
const EcoFriendlyArticlesSection = ({ articles }: EcoFriendlyArticlesSectionProps) => {
  return (
    <View>
      <Text className="text-lg font-semibold ml-5 mt-2">Explore Eco-Friendly Insights</Text>
      {articles?.map((article, index) => (
        <Article
          key={index}
          article_id={article.article_id}
          description={article.description}
          title={article.title}
          image_url={article.image_url}
        />
      ))}
    </View>
  );
};

export default EcoFriendlyArticlesSection;
