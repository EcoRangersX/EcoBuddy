import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface Location {
  label: string;
  value: string;
  color?: string;
}

interface ChooseLocationDropdownProps {
  locations: Location[];
  location: string;
  onLocationChange: (value: string) => void;
}

const ChooseLocationDropdown = ({
  location,
  onLocationChange,
  locations,
}: ChooseLocationDropdownProps) => {
  return (
    <>
      <Text className="text-lg ml-2 mb-1">Location</Text>
      <View className="bg-white rounded-full">
        <RNPickerSelect
          value={location}
          onValueChange={onLocationChange}
          placeholder={{}}
          items={locations.map(location => ({
            label: location.label,
            value: location.value,
          }))}
        />
      </View>
    </>
  );
};

export default ChooseLocationDropdown;
