import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface ChooseLocationDropdownProps {
  locations: { label: string; value: string }[];
  onValueChange: (value: string) => void;
}

/**
 * Renders the choose location dropdown component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.locations - The array of locations for the dropdown.
 * @param {Function} props.onValueChange - The function to call when the value changes.
 * @returns {JSX.Element} The rendered choose location dropdown.
 */
const ChooseLocationDropdown = ({
  locations,
  onValueChange,
}: ChooseLocationDropdownProps) => {
  return (
    <View className="bg-white rounded-full">
      <RNPickerSelect
        onValueChange={onValueChange}
        placeholder={{ label: 'Choose Location' }}
        items={locations.map(location => ({
          label: location.label,
          value: location.value,
        }))}
      />
    </View>
  );
};

export default ChooseLocationDropdown;
