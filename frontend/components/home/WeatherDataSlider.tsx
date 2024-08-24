import { useState } from 'react';
import {
  ScrollView,
  View,
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import WeatherDataElement from '@/components/home/WeatherDataElement';

interface WeatherDataSliderProps {
  weatherData: { value: number; 'weather-element': string, unit: string }[] | null;
  loading: boolean;
  error: string | null;
}

/**
 * Renders a slider component for displaying weather data.
 *
 * @component
 * @example
 * ```tsx
 * <WeatherDataSlider weatherData={data} />
 * ```
 *
 * @param {object} props - The component props.
 * @param {Array<object>} props.weatherData - The array of weather data objects to be displayed in the slider.
 *
 * @returns {JSX.Element} The rendered WeatherDataSlider component.
 */
export default function WeatherDataSlider({
  weatherData,
}: WeatherDataSliderProps) {
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

  return (
    <View className="relative" onLayout={handleLayout}>
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
        }>
        {weatherData?.map((element, index) => (
          <WeatherDataElement
            key={index}
            weatherElement={element['weather-element']}
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
