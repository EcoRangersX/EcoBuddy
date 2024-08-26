import { TouchableOpacity } from 'react-native';
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { BasicIconProps } from './HomeIcons';


interface SaveToFavoriteIcon extends BasicIconProps {
  article_id: number;
  saved: boolean;
}

interface ClearQueryIcon extends BasicIconProps {
  onPress: () => void;
}

const SaveToFavoriteIcon = ({
  size,
  color,
  article_id,
  saved,
}: SaveToFavoriteIcon) => {
  const handleSaveToFavorite = (article_id: number) => {
    //TODO: Implement the logic to save the article to the favorite list
    console.log(`Saving article with the id: ${article_id} to favorite list`);
  };

  return (
    <TouchableOpacity
      className="bg-white h-12 w-12 items-center justify-center rounded-full shadow-md shadow-black"
      onPress={() => handleSaveToFavorite(article_id)}>
      {saved ? (
        <FontAwesome name="bookmark" size={size} color={color} />
      ) : (
        <FontAwesome name="bookmark-o" size={size} color={color} />
      )}
    </TouchableOpacity>
  );
};

const SearchIcon = ({ size = 24, color = 'white' }: BasicIconProps) => {
  return (
    <TouchableOpacity className="bg-[#71d285] rounded-full items-center justify-center shadow-md shadow-black w-12 h-12">
      <MaterialIcons name="search" size={size} color={color} />
    </TouchableOpacity>
  );
};

const ClearQueryIcon = ({
  size = 24,
  color = 'black',
  onPress,
}: ClearQueryIcon) => {
  return (
    <MaterialCommunityIcons
      name="close-circle-outline"
      size={size}
      color={color}
      onPress={onPress}
    />
  );
};

export { SaveToFavoriteIcon, SearchIcon, ClearQueryIcon };
