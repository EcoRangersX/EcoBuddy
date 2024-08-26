import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface ChooseLanguageDropdownProps {
  languages: { label: string; value: string }[];
  onValueChange: (value: string) => void;
}

const ChooseLanguageDropdown = ({
  languages,
  onValueChange,
}: ChooseLanguageDropdownProps) => {
  return (
    <View className="bg-white rounded-full">
      <RNPickerSelect
        onValueChange={onValueChange}
        placeholder={{ label: 'Choose Language' }}
        items={languages.map(language => ({
          label: language.label,
          value: language.value,
        }))}
      />
    </View>
  );
};

export default ChooseLanguageDropdown;
