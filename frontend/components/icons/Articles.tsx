import TouchableNativeFeedback from 'react-native-gesture-handler/lib/typescript/components/touchables/TouchableNativeFeedback.android';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface BasicIconProps {
  color?: string;
  size?: number;
}

interface SaveToFavoriteIcon extends BasicIconProps {
  article_id: number;
}

const SaveToFavoriteIcon = ({
  size,
  color,
  article_id,
}: SaveToFavoriteIcon) => {
  const handleSaveToFavorite = (article_id: number) => {
    //TODO: Implement the logic to save the article to the favorite list
    console.log(`Saving article with the id: ${article_id} to favorite list`);
  };

  return (
    <TouchableNativeFeedback onPress={() => handleSaveToFavorite(article_id)}>
      <FontAwesome6 name="bookmark" size={size} color={color} />
    </TouchableNativeFeedback>
  );
};

export { SaveToFavoriteIcon };
