import { Text, View, TouchableOpacity } from 'react-native';
import {
  // PollenIcon,
  // UvIndexIcon,
  WindIcon,
  HumidityIcon,
  TemperatureIcon,
  PressureIcon,
} from '@/components/icons/HomeIcons';
import capitalizeWord from '@/utils/capitalizeWord';
import {
  tempLevel,
  windLevel,
  pressureLevel,
  humidityLevel,
} from '@/utils/weatherDataLevels';
import {
  tempColors,
  windColors,
  pressureColors,
  humidityColors,
} from '@/constants/Colors';

export interface WeatherDataElementProps {
  weatherElement: string;
  value: number;
  unit: string;
}

/**
 * Renders a weather data element.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.weatherElement - The name of the weather element.
 * @param {number} props.value - The value of the weather element.
 * @param {string} props.unit - The unit of measurement for the weather element.
 * @returns {JSX.Element} The rendered WeatherDataElement component.
 */
export default function WeatherDataElement({
  weatherElement,
  value,
  unit,
}: WeatherDataElementProps) {
  const elementIcon = (elementName: string) => {
    switch (elementName.toLowerCase()) {
      case 'Temperature':
        return <TemperatureIcon />;
      case 'humidity':
        return <HumidityIcon />;
      case 'wind':
        return <WindIcon />;
      case 'pressure':
        return <PressureIcon />;
      // We don't display display below data at the moment
      // case 'pollen':
      //   return <PollenIcon />;
      // case 'uv index':
      //   return <UvIndexIcon />;
      default:
        return <TemperatureIcon />;
    }
  };

  const weatherStatus = (value: number) => {
    switch (weatherElement.toLowerCase()) {
      case 'temperature':
        return tempLevel(value);
      case 'wind-speed':
        return windLevel(value);
      case 'humidity':
        return humidityLevel(value);
      case 'pressure':
        return pressureLevel(value);
      // We are unable to display below weather data due to resources constraints
      // case 'pollen':
      //   return pollenLevel(value);
      // case 'uv index':
      //   return uvIndexLevel(value);
      default:
        return 'moderate';
    }
  };

  const borderColor = (value: number) => {
    const status = weatherStatus(value);
    let color = '';
    switch (weatherElement.toLowerCase()) {
      case 'temperature':
        color = tempColors[status];
        break;
      case 'wind-speed':
        color = windColors[status];
        break;
      case 'humidity':
        color = humidityColors[status];
        break;
      case 'pressure':
        color = pressureColors[status];
        break;
      // We are unable to display below weather data due to resources constraints
      // case 'pollen':
      //   color = pollenColors[status];
      //   break;
      // case 'uv index':
      //   color = uvIndexColors[status];
      //   break;
      default:
        color = '#2abb49';
        break;
    }
    return color;
  };

  const borderColorStyle = {
    borderBottomColor: borderColor(value),
    borderBottomWidth: 4,
  };

  return (
    <View className="flex bg-[#199ee7] p-3 rounded-2xl relative">
      <View className="flex flex-row items-center gap-7 relative">
        <Text
          style={borderColorStyle}
          className="flex text-white text-base mb-2 rounded-b">
          {capitalizeWord(weatherElement)}
        </Text>
        <TouchableOpacity>{elementIcon(weatherElement)}</TouchableOpacity>
      </View>
      <View className="flex flex-col items-start">
        <View className="flex flex-row items-baseline">
          <Text className="text-white text-3xl">{value.toFixed(0)}</Text>
          <Text className="text-white text-xs">{unit}</Text>
        </View>
        <Text className="text-white text-xs">
          {weatherStatus(value).toUpperCase()}
        </Text>
      </View>
    </View>
  );
}
