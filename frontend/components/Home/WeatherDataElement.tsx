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
  tempColors,
  windColors,
} from '@/utility/weatherDataLevels';

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

  const borderColor = (status: string) => {
    let color = '';
    switch (weatherElement.toLowerCase()) {
      case 'temp.':
        color = tempColors[status];
        break;
      case 'wind':
        color = windColors[status];
        break;
      default:
        color = '#2abb49';
        break;
    }
    return `border-[${color}]`;
  };

  const Styles = {
    containerStyles:
      'flex bg-[#199ee7] p-3 rounded-2xl items-center shadow-2xl shadow-[#5662f6] relative',
    rowStyles: 'flex flex-row items-center gap-7 relative',
    elementTextStyles: `flex text-white text-base border-b-[4px] ${borderColor(weatherStatus(value))} mb-2`,
    flexColStyles: 'flex flex-col items-center mr-10',
    flexRowStyles: 'flex flex-row items-baseline',
    valueTextStyles: 'text-white text-3xl',
    unitTextStyles: 'text-white text-[10px]',
    statusTextStyles: 'text-white text-[10px] mr-10',
  };

  return (
    <View className={Styles.containerStyles}>
      <View className={Styles.rowStyles}>
        <Text className={Styles.elementTextStyles}>
          {capitalize(weatherElement)}
        </Text>
        <TouchableOpacity>{elementIcon(weatherElement)}</TouchableOpacity>
      </View>
      <View className={Styles.flexColStyles}>
        <View className={Styles.flexRowStyles}>
          <Text className={Styles.valueTextStyles}>{value}</Text>
          <Text className={Styles.unitTextStyles}>{unit}</Text>
        </View>
        <Text className={Styles.statusTextStyles}>
          {weatherStatus(value).toUpperCase()}
        </Text>
      </View>
    </View>
  );
};
