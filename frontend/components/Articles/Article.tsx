import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ArticleProps } from '@/types/articles';

const Article = ({ title, article_id, description, image_url }: ArticleProps) => {
  return (
    <View className="bg-white rounded-lg overflow-hidden shadow-lg m-2.5">
      <Image
        className="w-full h-36"
        source={{ uri: image_url }}
        resizeMode="cover"
      />
      <View className="p-4">
        <Text className="text-lg font-semibold mb-2">
          {title}
        </Text>
        <Text className="text-gray-700 mb-4">
          {description}
        </Text>
        <View className="flex-row justify-between items-center">
          <TouchableOpacity className="flex-row items-center text-green-600">
            {/* Placeholder for an icon */}
            <Text className="text-2xl text-green-600">🔖</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-green-600 py-2 px-4 rounded-full">
            <Text className="text-white text-base font-medium">Read</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Article;