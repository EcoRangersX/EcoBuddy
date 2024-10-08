import { View, Text } from 'react-native';

interface AqiLevelItemProps {
  range: string;
  description: string;
  bgColor: string;
}

/**
 * Renders an AQI level item.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.range - The range of the AQI level.
 * @param {string} props.description - The description of the AQI level.
 * @param {string} props.bgColor - The background color of the AQI level item.
 * @returns {JSX.Element} The rendered AQI level item.
 */
const AqiLevelItem = ({ range, description, bgColor }: AqiLevelItemProps) => {
  return (
    <View className="flex-row items-center mb-4 rounded-full flex-1 shadow-lg shadow-black relative bg-white p-2">
      <View className="p-2 rounded-full bg-white">
        <Text className="text-black font-semibold text-center">{range}</Text>
      </View>
      <View
        style={{ backgroundColor: bgColor }}
        className="p-3 rounded-full absolute right-2 w-[65%] flex-wrap">
        <Text className="text-center text-white font-medium">
          {description}
        </Text>
      </View>
    </View>
  );
};

export default AqiLevelItem;
