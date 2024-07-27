import { View } from 'react-native';
import AQIComponent from '@/components/Home/AQIComponent';
import Header from '@/components/Header';
import WeatherDataElement from '@/components/Home/WeatherDataElement';

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <View className="mt-10 items-center">
        <AQIComponent />
      </View>
      <View className='mt-5 items-center'>
        <WeatherDataElement elementName='wind' value={26} status="low" />
      </View>
    </View>
  );
}
