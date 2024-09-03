import Ionicons from '@expo/vector-icons/Ionicons';
import { BasicIconProps } from './HomeIcons';

const LogOutIcon = ({ size, color }: BasicIconProps) => {
  return <Ionicons name="log-out-outline" size={size} color={color} />;
};

export { LogOutIcon };
