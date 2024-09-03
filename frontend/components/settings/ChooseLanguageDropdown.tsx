import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface Language {
  label: string;
  value: string;
  color?: string;
}

interface ChooseLanguageDropdownProps {
  languages: Language[];
  currentLanguage: string;
  onLanguageChange: (value: string) => void;
}

const ChooseLanguageDropdown = ({
  languages,
  currentLanguage,
  onLanguageChange,
}: ChooseLanguageDropdownProps) => {
  return (
    <>
      <Text className='text-lg ml-2 mb-1'>Language</Text>
      <View className="bg-white rounded-full">
      <RNPickerSelect
        value={currentLanguage}
        onValueChange={onLanguageChange}
        placeholder={{}}
        items={languages.map(language => ({
          label: language.label,
          value: language.value,
        }))}
      />
      </View>
    </>
  );
};

export default ChooseLanguageDropdown;
