import { View, Text } from 'react-native';

type AirQualityTipProps = {
  tip: string;
};

const AirQualityTip = ({ tip }: AirQualityTipProps) => {
  return (
    <View className="flex items-center bg-[#9ad5df] py-2 my-3 rounded-full shadow-md shadow-black">
      <Text className="text-white text-base font-bold">{tip}</Text>
    </View>
  );
};

export default AirQualityTip;
