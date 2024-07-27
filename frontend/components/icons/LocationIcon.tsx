import { Ionicons } from '@expo/vector-icons';

interface LocationIconProps {
  color?: string;
  size?: number;
}

const LocationIcon = ({ color = 'black', size = 24 }: LocationIconProps) => {
  return <Ionicons name="location-outline" size={size} color={color} />;
};

export default LocationIcon;
