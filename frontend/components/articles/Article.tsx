import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ArticleProps } from '@/types/articles';
import { BookmarkIcon } from '../icons/Articles';

/**
 * Renders an article component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the article.
 * @param {number} props.article_id - The ID of the article.
 * @param {string} props.description - The description of the article.
 * @param {string} props.image_url - The URL of the article image.
 * @returns {JSX.Element} The rendered article component.
 */
const Article = ({
  title,
  article_id,
  description,
  image_url,
  saved = false,
}: ArticleProps) => {
  const handleAddToFavorite = () => {
    // TODO: Implement add to favorite functionality by article_id
    console.log(`Imitation of adding article: ${article_id} to favorite`);
  }

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
          <BookmarkIcon size={32} saved={saved} onPress={handleAddToFavorite} styles='shadow-md shadow-black'/>
          <TouchableOpacity className="bg-[#22a054] py-2 px-5 rounded-full">
            <Text className="text-white text-base font-medium">Read</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Article;
