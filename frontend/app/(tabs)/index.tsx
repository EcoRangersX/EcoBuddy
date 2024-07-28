import { ScrollView, View } from 'react-native';
import AQIComponent from '@/components/Home/AQIComponent';
import Header from '@/components/Header';
import WeatherDataSlider from '@/components/Home/WeatherDataSlider';
import ChemicalElementsSlider from '@/components/Home/ChemicalElementsSlider';

export default function HomeScreen() {
  return (
    <ScrollView>
      <Header />
      <View className="mt-5 items-center">
        <AQIComponent />
      </View>
      <View className="mt-5 p-5">
        <WeatherDataSlider />
      </View>
      <View className="">
        <ChemicalElementsSlider />
      </View>
    </ScrollView>
  );
}
