import WeatherDataElement from '@/components/Home/WeatherDataElement';
import { ScrollView, ViewStyle } from 'react-native';

export default function WeatherDataSlide() {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={
        {
          flexDirection: 'row',
          padding: 20,
          gap: 20,
          alignItems: 'center',
        } as ViewStyle
      }>
      <WeatherDataElement weatherElement="temp." value={32} unit="°C" />
      <WeatherDataElement weatherElement="wind" value={24} unit="km/h" />
      <WeatherDataElement weatherElement="pollen" value={21} unit="grains/m³" />
      <WeatherDataElement weatherElement="uv index" value={6} unit="" />
      <WeatherDataElement weatherElement="humidity" value={17} unit="%RH" />
      <WeatherDataElement weatherElement="pressure" value={1011} unit="hPa" />
    </ScrollView>
  );
}
