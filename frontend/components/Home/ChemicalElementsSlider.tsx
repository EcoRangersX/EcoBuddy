import { ScrollView, View, Text } from 'react-native';
import ChemicalElement from './ChemicalElement';

const chemicalElements = [
    { chemElement: 'PM2.5', value: 20.1, bgColor: '#c0facc' },
    { chemElement: 'PM10', value: 3.9, bgColor: '#bff1f9' },
    { chemElement: 'O3', value: 85.6, bgColor: '#8be89f' },
    { chemElement: 'CO', value: 1.41, bgColor: '#74c6d4' },
    { chemElement: 'NO2', value: 12.8, bgColor: '#96d6e1' },
    { chemElement: 'SO2', value: 0.9, bgColor: '#37e9ca' },
];

function ChemicalElementsSlider () {
  return (
    <View className="p-4">
      <View className='flex flex-row items-baseline gap-1'>
        <Text className="text-lg font-bold mb-2">Air pollution signals</Text>
        <Text className='text-green-900 text-base'>(µg/m³)</Text>
      </View>
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
