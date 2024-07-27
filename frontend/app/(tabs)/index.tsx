import { View } from 'react-native';
import AQIComponent from '@/components/Home/AQIComponent';
import Header from '@/components/Header';
import WeatherDataSlide from '@/components/Home/WeatherDataSlide';

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <View className="mt-10 items-center">
        <AQIComponent />
      </View>
      <View >
        <WeatherDataSlide />
      </View>
    </View>
  );
}
