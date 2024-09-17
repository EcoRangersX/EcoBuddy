import { FontAwesome } from '@expo/vector-icons';
import { BasicIconProps } from './HomeIcons';

const StarIcon = ({size = 24, color = "black"}: BasicIconProps) => {
  return <FontAwesome name="star" size={size} color={color} />;
};

export { StarIcon };
