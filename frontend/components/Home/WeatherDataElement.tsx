import { Text, View, TouchableOpacity } from 'react-native';
import {
  PollenIcon,
  WindIcon,
  HumidityIcon,
  TemperatureIcon,
  UvIndexIcon,
  PressureIcon,
} from '@/components/icons/HomeIcons';
import capitalize from '@/utility/capitalizeWord';
import {
  tempLevel,
  windLevel,
  pollenLevel,
  uvIndexLevel,
  pressureLevel,
  humidityLevel,
} from '@/utility/weatherDataLevels';
import {
  tempColors,
  windColors,
  pressureColors,
  humidityColors,
  uvIndexColors,
  pollenColors,
} from '@/constants/Colors';

interface WeatherDataElementProps {
  weatherElement: string;
  value: number;
  unit: string;
}

export default function WeatherDataElement({
  weatherElement,
  value,
  unit,
}: WeatherDataElementProps) {
  const elementIcon = (elementName: string) => {
    switch (elementName.toLowerCase()) {
      case 'temp.':
        return <TemperatureIcon />;
      case 'humidity':
        return <HumidityIcon />;
      case 'pollen':
        return <PollenIcon />;
      case 'wind':
        return <WindIcon />;
      case 'pressure':
        return <PressureIcon />;
      case 'uv index':
        return <UvIndexIcon />;
      default:
        return <TemperatureIcon />;
    }
  };

  const weatherStatus = (value: number) => {
    switch (weatherElement.toLowerCase()) {
      case 'temp.':
        return tempLevel(value);
      case 'wind':
        return windLevel(value);
      case 'pollen':
        return pollenLevel(value);
      case 'uv index':
        return uvIndexLevel(value);
      case 'humidity':
        return humidityLevel(value);
      case 'pressure':
        return pressureLevel(value);
      default:
        return 'moderate';
    }
  };

  const borderColor = (value: number) => {
    const status = weatherStatus(value);
    let color = '';
    switch (weatherElement.toLowerCase()) {
      case 'temp.':
        color = tempColors[status];
        break;
      case 'wind':
        color = windColors[status];
        break;
      case 'pollen':
        color = pollenColors[status];
        break;
      case 'uv index':
        color = uvIndexColors[status];
        break;
      case 'humidity':
        color = humidityColors[status];
        break;
      case 'pressure':
        color = pressureColors[status];
        break;
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
     <View className="flex bg-[#199ee7] p-3 rounded-2xl items-center shadow-2xl shadow-[#5662f6] relative">
      <View className="flex flex-row items-center gap-2 relative">
        <Text style={borderColorStyle} className="flex text-white text-base mb-2 rounded-b">
          {capitalize(weatherElement)}
        </Text>
        <TouchableOpacity>{elementIcon(weatherElement)}</TouchableOpacity>
      </View>
      <View className="flex flex-col items-center">
        <View className="flex flex-row items-baseline">
          <Text className="text-white text-3xl">{value}</Text>
          <Text className="text-white text-xs">{unit}</Text>
        </View>
        <Text className="text-white text-xs">
          {weatherStatus(value).toUpperCase()}
        </Text>
      </View>
    </View>
  );
}
