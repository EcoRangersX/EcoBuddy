import WeatherDataElement from '@/components/Home/WeatherDataElement';
import { View } from 'react-native';

export default function WeatherDataSlide() {
  return (
    <View className="flex flex-row p-5 items-center">
      <WeatherDataElement elementName="wind" value={26} unit="km/h" status="low" />
      <WeatherDataElement elementName="pollen" value={26} unit="%" status="low" />
      <WeatherDataElement elementName="pollen" value={26} unit="%" status="low" />
    </View>
  );
}
