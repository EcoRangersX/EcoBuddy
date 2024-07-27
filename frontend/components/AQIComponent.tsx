import { View, Text, TouchableOpacity } from 'react-native';
import Svg from 'react-native-svg';
import { AnimatedCircularProgress  } from 'react-native-circular-progress';

const AQIComponent = () => {
  const aqiValue = 36; // Static data for now
  const aqiStatus = "Good"; // Static data for now
  const location = "Gniezno, Greater Poland"; // Static data for now

  return (
    <View className="bg-[#38d26e] p-5 rounded-[30px] w-[80%] items-center justify-center">
      <Text className="text-white text-base mb-3">{location}</Text>
      <View className="items-center justify-center">
        <Svg width={170} height={170} viewBox="0 0 170 170">
          <AnimatedCircularProgress
            size={170}
            width={8}
            fill={aqiValue}
            tintColor="#3dbcab"
            backgroundColor="#fff"
            lineCap="round"
          >
            {
              () => (
                <View className='flex flex-col'>
                  <Text className="text-white text-4xl self-center">{aqiValue}</Text>
                  <Text className="text-white text-lg self-center">{aqiStatus}</Text>
                </View>
              )
            }
          </AnimatedCircularProgress>
        </Svg>
      </View>
      <Text className="text-white text-sm mb-4">EU AQI</Text>
      <TouchableOpacity className="bg-white px-5 py-2 rounded-full">
        <Text className="text-[#3ac5c9] text-base">View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AQIComponent;
