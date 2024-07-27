import WeatherDataElement from '@/components/Home/WeatherDataElement';
import { ScrollView, ViewStyle } from 'react-native';

export default function WeatherDataSlide() {
  return (
    <ScrollView horizontal={true} contentContainerStyle={{ flexDirection: 'row', padding: 20, gap: 20, alignItems: 'center' } as ViewStyle}>
      <WeatherDataElement elementName="temp." value={26} unit="°C" status="low" />
      <WeatherDataElement elementName="wind" value={26} unit="km/h" status="moderate" />
      <WeatherDataElement elementName="pollen" value={26} unit="" status="low" />
      <WeatherDataElement elementName="uv index" value={7} unit="" status="high" />
      <WeatherDataElement elementName="humidity" value={26} unit="%" status="low" />
      <WeatherDataElement elementName="pressure" value={26} unit="hPa" status="high" />
    </ScrollView>
  );
}
