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
      <WeatherDataElement weatherElement="wind" value={21} unit="km/h" />
      <WeatherDataElement weatherElement="pollen" value={21} unit="" />
      <WeatherDataElement weatherElement="uv index" value={7} unit="" />
      <WeatherDataElement weatherElement="humidity" value={17} unit="%" />
      <WeatherDataElement weatherElement="pressure" value={1111} unit="hPa" />
    </ScrollView>
  );
}
