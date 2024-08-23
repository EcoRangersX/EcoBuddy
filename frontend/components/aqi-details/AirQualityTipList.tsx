import { View, Text } from 'react-native';
import AirQualityTip from './AirQualityTip';

type AirQualityTipListProps = {
  tips: string[];
};

/**
 * Renders a list of air quality tips.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array<string>} props.tips - The array of air quality tips.
 * @returns {JSX.Element} The rendered component.
 */
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
