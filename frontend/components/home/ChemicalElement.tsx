import { View, Text } from 'react-native';
import { ChemicalElementProps } from '@/types/home';

/**
 * Renders a chemical element component.
 *
 * @component
 * @param {ChemicalElementProps} props - The component props.
 * @param {string} props.chemElement - The chemical element name.
 * @param {number} props.value - The value of the chemical element.
 * @param {string} props.bgColor - The background color of the component.
 * @returns {JSX.Element} The rendered ChemicalElement component.
 */
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
