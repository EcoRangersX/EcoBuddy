import { ScrollView, View, Text } from 'react-native';
import ChemicalElement from './ChemicalElement';

const chemicalElements = [
  { chemElement: 'PM2.5', value: 20.1, bgColor: 'bg-blue-200' },
  { chemElement: 'PM10', value: 3.9, bgColor: 'bg-green-200' },
  { chemElement: 'O3', value: 85.6, bgColor: 'bg-green-200' },
  { chemElement: 'CO', value: 1.41, bgColor: 'bg-blue-200' },
];

function ChemicalElementsSlider () {
  return (
    <View className="p-4">
      <Text className="text-lg font-bold mb-2">Air pollution signals</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {chemicalElements.map((element, index) => (
          <ChemicalElement
            key={index}
            chemElement={element.chemElement}
            value={element.value}
            bgColor={element.bgColor}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ChemicalElementsSlider;
