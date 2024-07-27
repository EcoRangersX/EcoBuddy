import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

interface BasicIconProps {
  color?: string;
  size?: number;
}

const LocationIcon = ({ color = 'black', size = 24 }: BasicIconProps) => {
  return <Ionicons name="location-outline" size={size} color={color} />;
};

const ViewDetailsIcon = ({ color = '#000000', size = 24 }: BasicIconProps) => (
  <MaterialCommunityIcons
    name="arrow-top-right-thin-circle-outline"
    size={size}
    color={color}
  />
);

const CloseSideBarIcon = ({ size = 24, color = 'black' }: BasicIconProps) => {
  <MaterialCommunityIcons name="window-close" size={size} color={color} />;
};

export { LocationIcon, ViewDetailsIcon, CloseSideBarIcon };
