import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { BasicIconProps } from './Articles';

const ErrorIcon = ({ size, color }: BasicIconProps) => {
  return <MaterialIcons name="error-outline" size={size} color={color} />;
};

export { ErrorIcon };
