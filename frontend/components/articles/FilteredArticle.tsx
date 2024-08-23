import { View, Text, Image } from 'react-native';
import { FilteredArticleProps } from '@/types/articles';

const FilteredArticle = ({ article }: FilteredArticleProps) => {
  return (
    <View className="flex-row items-center p-3 border-b border-gray-300">
      <Image
        source={{ uri: article.previewImageUrl }}
        className="w-16 h-16 rounded-lg"
      />
      <Text className="flex-1 text-lg font-bold ml-4">{article.title}</Text>
    </View>
  );
};

export default FilteredArticle;
