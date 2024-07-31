import { View, Text } from 'react-native';

interface ChemicalElementProps {
  chemElement: string;
  value: number;
  bgColor: string;
}

function ChemicalElement ({ chemElement, value, bgColor }: ChemicalElementProps) {
  return (
    <View style={{ backgroundColor: bgColor }} className={`w-24 h-24 rounded-xl m-2 flex items-center justify-center`}>
      <Text className="text-black text-lg">{chemElement}</Text>
      <Text className="text-black">{value}</Text>
    </View>
  );
};

export default ChemicalElement;
