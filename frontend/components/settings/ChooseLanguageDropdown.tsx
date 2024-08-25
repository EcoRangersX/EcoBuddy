import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface ChooseLanguageDropdownProps {
  languages: string[];
  onValueChange: (value: string) => void;
}

const ChooseLanguageDropdown = ({ languages, onValueChange }: ChooseLanguageDropdownProps) => {
  return (
    <View className='bg-white rounded-full'>
      <RNPickerSelect
        onValueChange={onValueChange}
        // placeholder="Select language"
        items={languages.map(language => ({
          label: language,
          value: language,
        }))}
      />
    </View>
  );
};


export default ChooseLanguageDropdown;
