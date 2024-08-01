import { View, Text, TouchableOpacity } from 'react-native';
import Svg from 'react-native-svg';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { LocationIcon, ViewDetailsIcon } from '@/components/icons/HomeIcons';
import capitalize from '@/utility/capitalizeWord';
import { LinearGradient } from 'expo-linear-gradient';

interface AQIComponentProps {
  value: number;
  status: string;
  location: string;
}

const AQIComponent = ({ value, status, location }: AQIComponentProps) => {
  return (
    <LinearGradient
      colors={['rgba(30,158,105,1)', 'rgba(89,192,230,1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="rounded-[30px] w-[90%]">
      <View className='p-5 items-center justify-center'>
        <View className="flex flex-row items-center mb-3">
          <LocationIcon color="white" />
          <Text className="text-white text-base ml-1">{location}</Text>
        </View>
        <View className="items-center justify-center">
          <Svg width={190} height={190} viewBox="0 0 190 190">
            <AnimatedCircularProgress
              size={190}
              width={8}
              fill={value}
              tintColor="#3dbcab"
              backgroundColor="#fff"
              lineCap="round">
              {() => (
                <View className="flex flex-col">
                  <Text className="text-white text-4xl self-center">
                    {value}
                  </Text>
                  <Text className="text-white text-lg self-center">
                    {capitalize(status)}
                  </Text>
                </View>
              )}
            </AnimatedCircularProgress>
          </Svg>
        </View>
        <Text className="text-white text-sm mb-4">EU AQI</Text>
        <TouchableOpacity className="flex flex-row items-center bg-white px-7 py-2 rounded-full">
          <Text className="text-black text-base mr-2">View Details</Text>
          <ViewDetailsIcon size={30} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default AQIComponent;
