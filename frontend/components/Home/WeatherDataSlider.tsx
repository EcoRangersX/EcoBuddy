import { useState } from 'react';
import { ScrollView, View, ViewStyle, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import WeatherDataElement from '@/components/home/WeatherDataElement';

export default function WeatherDataSlider() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setScrollPosition(event.nativeEvent.contentOffset.x);
  };

  const handleContentSizeChange = (contentWidth: number) => {
    setContentWidth(contentWidth);
  };

  const handleLayout = (event: any) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  const showLeftGradient = scrollPosition > 0;
  const showRightGradient = scrollPosition < contentWidth - containerWidth;

  const weatherElements = [
    { weatherElement: 'temp.', value: 32, unit: '°C' },
    { weatherElement: 'wind', value: 8, unit: 'km/h' },
    { weatherElement: 'pollen', value: 342, unit: 'grains/m³' },
    { weatherElement: 'uv index', value: 12, unit: '' },
    { weatherElement: 'humidity', value: 17, unit: '%RH' },
    { weatherElement: 'pressure', value: 1011, unit: 'hPa' },
  ]

  return (
    <View className='relative' onLayout={handleLayout}>
      {/* Left Gradient */}
      {showLeftGradient && (
        <LinearGradient
          colors={['rgba(25, 158, 231, 0.5)', 'rgba(25, 158, 231, 0.5)']}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 20,
            zIndex: 10,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
          }}
        />
      )}
      {/* ScrollView */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onContentSizeChange={handleContentSizeChange}
        contentContainerStyle={
          {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
          } as ViewStyle
        }
      >
        {weatherElements.map((element, index) => (
          <WeatherDataElement
            key={index}
            weatherElement={element.weatherElement}
            value={element.value}
            unit={element.unit}
          />
        ))}
      </ScrollView>
      {/* Right Gradient */}
      {showRightGradient && (
        <LinearGradient
          colors={['rgba(25, 158, 231, 0.5)', 'rgba(25, 158, 231, 0.5)']}
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 20,
            zIndex: 10,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
        />
      )}
    </View>
  );
}
