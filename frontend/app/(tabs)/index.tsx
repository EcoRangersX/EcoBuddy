import { View } from 'react-native';
import AQIComponent from '@/components/Home/AQIComponent';
import Header from '@/components/Header';
import WeatherDataSlider from '@/components/Home/WeatherDataSlider';

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <View className='mt-5 items-center'>
        <AQIComponent />
      </View>
      <View className='mt-5 p-5'>
        <WeatherDataSlider />
      </View>
    </View>
  );
}
