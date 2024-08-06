import { View, Text } from 'react-native';
import { styles } from '@/constants/GlobalStyles';

interface AqiInfoBoxProps {
  info: string;
}

const AqiInfoBox = ({ info }: AqiInfoBoxProps) => {
  return (
    <View
      style={styles.BoxStyles}
      className="flex p-3">
      <Text className="text-lg text-black">{info}</Text>
    </View>
  );
};

export default AqiInfoBox;
