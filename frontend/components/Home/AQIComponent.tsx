import { View, Text, TouchableOpacity } from 'react-native';
import Svg from 'react-native-svg';
import { AnimatedCircularProgress  } from 'react-native-circular-progress';
import { LocationIcon, ViewDetailsIcon } from '@/components/icons/HomeIcons';

interface AQIComponentProps {
  aqiValue?: number;
  aqiStatus?: string;
  location?: string;
}

const AQIComponent = ({ aqiValue = 36, aqiStatus = "Good", location = "Gniezno, Greater Poland"}: AQIComponentProps) => {
  return (
    <View className="bg-[#38d26e] p-5 rounded-[30px] w-[90%] items-center justify-center">
      <View className='flex flex-row items-center mb-3'>
        <LocationIcon color='white' />
        <Text className="text-white text-base ml-1">{location}</Text>
      </View>
      <View className="items-center justify-center">
        <Svg width={190} height={190} viewBox="0 0 190 190">
          <AnimatedCircularProgress
            size={190}
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
      <TouchableOpacity className="flex flex-row items-center bg-white px-7 py-2 rounded-full">
        <Text className="text-black text-base mr-2">View Details</Text>
        <ViewDetailsIcon size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default AQIComponent;
