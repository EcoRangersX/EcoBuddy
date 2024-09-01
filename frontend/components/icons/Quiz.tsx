import { AntDesign } from '@expo/vector-icons';
import { BasicIconProps } from './HomeIcons';
import { TouchableOpacity } from 'react-native';

interface NextIconProps extends BasicIconProps {
  onPress: () => void;
}

const NextIcon = ({ size, color, onPress }: NextIconProps) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-full justify-center items-center w-12 h-12 border-[#08b1cf] border-2"
      onPress={onPress}>
      <AntDesign name="arrowright" size={size} color={color} />
    </TouchableOpacity>
  );
};

const PreviousIcon = ({ size, color, onPress }: PreviousIconProps) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-full justify-center items-center w-12 h-12 border-[#08b1cf] border-2"
      onPress={onPress}>
      <AntDesign name="arrowleft" size={size} color={color} />
    </TouchableOpacity>
  );
};

export { NextIcon, PreviousIcon };
