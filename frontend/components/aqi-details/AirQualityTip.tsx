import { View, Text } from 'react-native';

type AirQualityTipProps = {
  tip: string;
};

/**
 * Renders a component that displays an air quality tip.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.tip - The air quality tip to display.
 * @returns {JSX.Element} The rendered AirQualityTip component.
 */
const AirQualityTip = ({ tip }: AirQualityTipProps) => {
  return (
    <View className="flex items-center bg-[#9ad5df] py-2 my-3 rounded-full shadow-md shadow-black">
      <Text className="text-white text-base font-bold">{tip}</Text>
    </View>
  );
};

export default AirQualityTip;
