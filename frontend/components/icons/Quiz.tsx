import { AntDesign } from '@expo/vector-icons';
import { BasicIconProps } from './HomeIcons';
import { TouchableOpacity } from 'react-native';

interface NavigationIconProps extends BasicIconProps {
  onPress: () => void;
  styles?: string;
}


const NextIcon = ({ size, color, onPress, styles }: NavigationIconProps) => {
  console.log(`The styles of NextIcon: ${styles}`)
  return (
    <TouchableOpacity
      className={`bg-white rounded-full justify-center items-center w-12 h-12 border-[#08b1cf] border-2 ${styles}`}
      onPress={onPress}>
      <AntDesign name="arrowright" size={size} color={color} />
    </TouchableOpacity>
  );
};

const PreviousIcon = ({ size, color, onPress, styles }: NavigationIconProps) => {
  return (
    <TouchableOpacity
      className={`bg-white rounded-full justify-center items-center w-12 h-12 border-[#08b1cf] border-2 ${styles}`}
      onPress={onPress}>
      <AntDesign name="arrowleft" size={size} color={color} />
    </TouchableOpacity>
  );
};

export { NextIcon, PreviousIcon };
