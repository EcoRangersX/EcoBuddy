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

interface WeatherDataElementProps {
  elementName: string;
  value: number;
  unit: string;
}

export default function WeatherDataElement({
  elementName,
  value,
  unit,
}: WeatherDataElementProps) {
  const elementIcon = (elementName: string) => {
    switch (elementName.toLocaleLowerCase()) {
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

  const borderColor = (status: string) => {
    if (elementName === 'temp.') {
      switch (status) {
        case 'cold':
          return 'border-[#03c13d]';
        case 'cool':
          return 'border-[#56cade]';
        case 'moderate':
          return 'border-[#f6b930]';
        case 'warm':
          return 'border-[#ff7f00]';
        case 'hot':
          return 'border-[#ff0000]';
        default:
          return 'border-[#03c13d]';
      }
    } else if (elementName === 'wind') {
      switch (status) {
        case 'low':
          return 'border-[#2abb49]';
        case 'moderate':
          return 'border-[#f6b930]';
        case 'high':
          return 'border-[#ff7f00]';
        case 'very high':
          return 'border-[#ff0000]';
        default:
          return 'border-[#2abb49]';
      }
    }
    return 'border-[#2abb49]';
  };

  const status = (elementName: string) => {
    if (elementName === 'temp.') {
      return tempLevel(value);
    } else if (elementName === 'wind') {
      return windLevel(value);
    } else if (elementName === 'pollen') {
      return pollenLevel(value);
    } else if (elementName === 'uv index') {
      return uvIndexLevel(value);
    } else if (elementName === 'humidity') {
      return humidityLevel(value);
    } else if (elementName === 'pressure') {
      return pressureLevel(value);
    }
    return 'moderate';
  };

  const Styles = {
    containerStyles:
      'flex bg-[#199ee7] p-3 rounded-2xl items-center shadow-2xl shadow-[#5662f6] relative',
    rowStyles: 'flex flex-row items-center gap-7 relative',
    elementTextStyles: `flex text-white text-base border-b-[4px] ${borderColor(
      status(elementName),
    )} pb-[px]`,
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
          {capitalize(elementName)}
        </Text>
        <TouchableOpacity>{elementIcon(elementName)}</TouchableOpacity>
      </View>
      <View className={Styles.flexColStyles}>
        <View className={Styles.flexRowStyles}>
          <Text className={Styles.valueTextStyles}>{value}</Text>
          <Text className={Styles.unitTextStyles}>{unit}</Text>
        </View>
        <Text className={Styles.statusTextStyles}>
          {status(elementName).toUpperCase()}
        </Text>
      </View>
    </View>
  );
}
