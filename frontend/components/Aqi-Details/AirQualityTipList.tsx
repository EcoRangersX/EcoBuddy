import { View, Text } from 'react-native';
import AirQualityTip from './AirQualityTip';

type AirQualityTipListProps = {
  tips: string[];
};

const AirQualityTipList = ({ tips }: AirQualityTipListProps) => {
  return (
    <View>
      <Text className="text-black text-xl">Indoor Air Quality Tips</Text>
      <View className="bg-[#88cdd9] rounded-2xl mt-2 p-5">
        {tips.map((tip, index) => (
          <AirQualityTip key={index} tip={tip} />
        ))}
      </View>
    </View>
  );
};

export default AirQualityTipList;
