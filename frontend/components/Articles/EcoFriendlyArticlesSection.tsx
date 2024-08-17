import { View, Text } from 'react-native';
import Article from './Article';
import { ArticleProps } from '@/types/articles';

interface EcoFriendlyArticlesSectionProps {
  articles: ArticleProps[];
}

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
