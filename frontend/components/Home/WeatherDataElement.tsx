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
  status: string;
  unit: string;
}

export default function WeatherDataElement({
  elementName,
  value,
  status,
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
      case "uv index":
        return <UvIndexIcon />;
      default:
        return <TemperatureIcon />;
    }
  };

  const borderColor = ( status: string ) => {
    switch (status) {
      case 'low':
        return 'border-[#03c13d]';
      case 'moderate':
        return 'border-[#f6b930]';
      case 'high':
        return 'border-[#ff0000]';
      default:
        return 'border-[#03c13d]';
    }
  }

  const Styles = {
    containerStyles:
      'flex bg-[#56cade] p-3 rounded-2xl items-center shadow-2xl shadow-[#5662f6] relative',
    rowStyles: 'flex flex-row items-center gap-7 relative',
    elementTextStyles:
      `flex text-white text-base border-b-[4px] ${borderColor(status)} pb-[px]`,
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
        <Text className={Styles.statusTextStyles}>{status.toUpperCase()}</Text>
      </View>
    </View>
  );
}
