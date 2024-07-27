import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ViewDetailsIconProps {
  color?: string;
  size?: number;
}

const ViewDetailsIcon = ({
  color = '#000000',
  size = 24,
}: ViewDetailsIconProps) => (
  <MaterialCommunityIcons
    name="arrow-top-right-thin-circle-outline"
    size={size}
    color={color}
  />
);

export default ViewDetailsIcon;
