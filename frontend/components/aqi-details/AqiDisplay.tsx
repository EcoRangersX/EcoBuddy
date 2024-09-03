import { View, Text } from 'react-native';
import { Svg } from 'react-native-svg';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { LinearGradient } from 'expo-linear-gradient';

interface AqiDisplayProps {
  aqi: number;
  lastUpdate: number;
}

/**
 * A component that displays the Air Quality Index (AQI) and its status.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.aqi - The Air Quality Index value.
 * @param {string} props.lastUpdate - The timestamp of the last update.
 * @returns {JSX.Element} The rendered component.
 */
const AqiDisplay = ({ aqi, lastUpdate }: AqiDisplayProps) => {
  const getStatus = (aqi: number) => {
    if (aqi <= 50) return 'good';
    // Add more conditions as needed
    return 'unhealthy';
  };

  return (
    <LinearGradient
      colors={['rgba(30,158,105,1)', 'rgba(89,192,230,1)']}
      className="p-3 rounded-[10px]">
      <View className="flex flex-row justify-between">
        <View className="flex items-center justify-center">
          <Svg width={120} height={120} viewBox="0 0 120 120">
            <AnimatedCircularProgress
              size={120}
              width={8}
              fill={aqi}
              tintColor="#30e0de"
              backgroundColor="#fff"
              lineCap="round">
              {() => (
                <View className="flex flex-col items-center">
                  <Text className="text-white text-xl">{aqi}</Text>
                  <Text className="text-white text-[10px]">
                    {getStatus(aqi)}
                  </Text>
                </View>
              )}
            </AnimatedCircularProgress>
          </Svg>
        </View>
        <Text className="text-white text-sm">
          Last update: {lastUpdate}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default AqiDisplay;
