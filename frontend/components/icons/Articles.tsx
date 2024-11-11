import { TouchableOpacity } from 'react-native';
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { BasicIconProps } from './HomeIcons';


interface BookmarkIconProps extends BasicIconProps {
  onPress: () => void;
  saved?: boolean;
  styles?: string;
}

interface ClearQueryIcon extends BasicIconProps {
  onPress: () => void;
}

const BookmarkIcon = ({
  size,
  color,
  saved,
  onPress,
  styles,
}: BookmarkIconProps) => {
  return (
    <TouchableOpacity
      className={`bg-white h-12 w-12 items-center justify-center rounded-full ${styles}`}
      onPress={onPress}>
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

export { BookmarkIcon, SearchIcon, ClearQueryIcon };
