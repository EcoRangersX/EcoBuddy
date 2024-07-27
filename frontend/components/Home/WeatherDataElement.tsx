import { Text, View, TouchableOpacity } from 'react-native';
import { PollenIcon, WindIcon } from '@/components/icons/HomeIcons';
import capitalize from '@/utility/capitalizeWord';

interface WeatherDataElementProps {
  elementName: string;
  value: number;
  status: string;
}

export default function WeatherDataElement({
  elementName,
  value,
  status,
}: WeatherDataElementProps) {
  const elementIcon = (elementName: string) => {
    switch (elementName.toLocaleLowerCase()) {
      case 'temp.':
        return '🌡️';
      case 'humidity':
        return '💧';
      case 'pollen':
        return <PollenIcon size={30} />;
      case 'wind':
        return <WindIcon size={30} />;
      case 'pressure':
        return '📊';
      default:
        return '🌡️';
    }
  };

  return (
    <View className="flex bg-[#73c4d2] p-3 rounded-2xl items-center shadow-black shadow-2xl">
      <View className='flex flex-row items-center gap-3 relative'>
        <Text className="text-white text-base underline">
          {capitalize(elementName)}
        </Text>
        <TouchableOpacity>{elementIcon(elementName)}</TouchableOpacity>
      </View>
      <View className="flex flex-col items-center mr-10">
        <View className='flex flex-row items-baseline'>
          <Text className="text-white text-3xl">{value}</Text>
          <Text className="text-white text-[10px]">km/h</Text>
        </View>
        <Text className="text-white text-[10px]">{status.toUpperCase()}</Text>
      </View>
    </View>
  );
}
