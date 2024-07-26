import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { AnimatedCircularProgress  } from 'react-native-circular-progress';

const AQIComponent = () => {
  const aqiValue = 36; // Static data for now
  const aqiStatus = "Good"; // Static data for now
  const location = "Gniezno, Greater Poland"; // Static data for now

  return (
    <View className="bg-[#3ac5c9] p-5 rounded-3xl items-center justify-center">
      <Text className="text-white text-base mb-2">{location}</Text>
      <View className="items-center justify-center mb-2">
        <Svg width={150} height={150} viewBox="0 0 150 150">
          <Circle
            cx="75"
            cy="75"
            r="70"
            stroke="#3dbf9f"
            strokeWidth="5"
            fill="none"
          />
          <AnimatedCircularProgress
            size={150}
            width={5}
            fill={aqiValue}
            tintColor="#00e0ff"
            backgroundColor="#3d5875"
            lineCap="round"
          >
            {
              () => (
                <Text className="text-white text-4xl absolute self-center mt-12">{aqiValue}</Text>
              )
            }
          </AnimatedCircularProgress>
        </Svg>
      </View>
      <Text className="text-white text-lg mb-1">{aqiStatus}</Text>
      <Text className="text-white text-sm mb-4">EU AQI</Text>
      <TouchableOpacity className="bg-white px-5 py-2 rounded-full">
        <Text className="text-[#3ac5c9] text-base">view details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AQIComponent;
