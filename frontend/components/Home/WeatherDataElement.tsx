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
    if (elementName === "temp.") {
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
    }
    return 'border-[#2abb49]';
  };

  const tempLevel = () => {
    if (value < 0) return 'cold';
    if (value >= 0 && value < 15) return 'cool';
    if (value >= 15 && value < 25) return 'moderate';
    if (value >= 25 && value < 35) return 'warm';
    if (value >= 35) return 'hot';
    return 'warm';
  };

  const windLevel = () => {
    if (value < 10) return 'low';
    if (value >= 10 && value < 20) return 'moderate';
    if (value >= 20 && value < 30) return 'high';
    if (value >= 30) return 'very high';
    return 'moderate';
  }

  const status = (elementName: string) => {
    if (elementName === 'temp.') {
      return tempLevel();
    } else if (elementName === 'wind') {
      return windLevel();
    }
    return "normal";
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
        <Text className={Styles.statusTextStyles}>{status(elementName).toUpperCase()}</Text>
      </View>
    </View>
  );
}
