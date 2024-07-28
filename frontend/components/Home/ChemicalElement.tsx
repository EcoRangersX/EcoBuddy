import { View, Text } from 'react-native';

interface ChemicalElementProps {
  chemElement: string;
  value: number;
  bgColor: string;
}

function ChemicalElement ({ chemElement, value, bgColor }: ChemicalElementProps) {
  return (
    <View className={`w-24 h-24 rounded-xl m-2 ${bgColor} flex items-center justify-center`}>
      <Text className="text-black text-lg">{chemElement}</Text>
      <Text className="text-black text-sm">{value}</Text>
    </View>
  );
};

export default ChemicalElement;
