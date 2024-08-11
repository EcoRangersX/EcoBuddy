import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ArticleProps } from '@/types/articles';
import { SaveToFavoriteIcon } from '../Icons/Articles';

const Article = ({
  title,
  article_id,
  description,
  image_url,
}: ArticleProps) => {
  return (
    <View className="bg-white rounded-[30px] overflow-hidden shadow-lg shadow-black m-4">
      <Image
        className="w-full h-40"
        source={{ uri: image_url }}
        resizeMode="cover"
      />
      <View className="p-4">
        <Text className="text-lg font-semibold mb-1">{title}</Text>
        <Text className="text-gray-800 mb-1">{description}</Text>

        <View className="flex-row justify-end items-center space-x-4">
          <SaveToFavoriteIcon size={32} article_id={article_id} />
          <TouchableOpacity className="bg-[#22a054] py-2 px-5 rounded-full">
            <Text className="text-white text-base font-medium">Read</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Article;
