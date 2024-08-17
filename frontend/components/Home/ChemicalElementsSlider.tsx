import { ScrollView, View, Text } from 'react-native';
import ChemicalElement from './ChemicalElement';
import { ChemicalElementSliderProps } from '@/types/home';

/**
 * Renders a slider component for displaying chemical elements and their concentrations.
 *
 * @component
 * @param {ChemicalElementSliderProps} props - The props for the ChemicalElementsSlider component.
 * @param {Array<ChemicalElement>} props.chemicalElementList - The list of chemical elements with their concentrations.
 * @returns {JSX.Element} The rendered ChemicalElementsSlider component.
 */
function ChemicalElementsSlider({
  chemicalElementList,
}: ChemicalElementSliderProps) {
    // console.log(`Concentration of Elements in Chemical Element Slider component: ${JSON.stringify(chemicalElementList)}`);
  return (
    <View className="p-4">
      <View className="flex flex-row items-baseline gap-1">
        <Text className="text-lg font-bold mb-2">Air pollution signals</Text>
        <Text className="text-green-900 text-base">(µg/m³)</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {chemicalElementList?.map((element, index) => (
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
}

export default ChemicalElementsSlider;
