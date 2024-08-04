import { View, Text } from 'react-native';
import { Colors } from '@/constants/Colors';

interface AqiInfoBoxProps {
  info: string;
}

const AqiInfoBox = ({ info }: AqiInfoBoxProps) => {
  return (
    <View
      style={{ borderColor: Colors.light.borderBox }}
      className="p-3 border-2 rounded-[30px] mt-2">
      <Text className="text-lg text-black">{info}</Text>
    </View>
  );
};

export default AqiInfoBox;
