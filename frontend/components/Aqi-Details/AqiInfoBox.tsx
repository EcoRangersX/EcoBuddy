import { View, Text } from 'react-native';
import { BoxStyles } from '@/constants/GlobalStyles';

interface AqiInfoBoxProps {
  info: string;
}

const AqiInfoBox = ({ info }: AqiInfoBoxProps) => {
  return (
    <View
      style={{
        borderColor: BoxStyles.borderColor,
        borderRadius: BoxStyles.borderRadius,
        borderWidth: BoxStyles.borderWidth,
      }}
      className="flex p-3">
      <Text className="text-lg text-black">{info}</Text>
    </View>
  );
};

export default AqiInfoBox;
