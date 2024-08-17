import { View, Text } from 'react-native';
import { ChemicalElementProps } from '@/types/home';

function ChemicalElement({
  chemElement,
  value,
  bgColor,
}: ChemicalElementProps) {
  return (
    <View
      style={{ backgroundColor: bgColor }}
      className={`w-24 h-24 rounded-xl m-2 flex justify-center`}>
      <View className='flex px-2'>
        <Text className="text-black text-lg">{chemElement}</Text>
        <Text className="text-black">{value}</Text>
      </View>
    </View>
  );
}

export default ChemicalElement;
