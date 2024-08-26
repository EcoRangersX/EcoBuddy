import { View } from 'react-native';
import { useState } from 'react';
import ChooseLanguageDropdown from './ChooseLanguageDropdown';

const AccountSettingsSection = () => {
  const [language, setLanguage] = useState('English');

  const languages = [
    { label: 'English', value: 'english' },
    { label: 'Polish', value: 'polish' },
  ];

  return (
    <View>
      <ChooseLanguageDropdown
        languages={languages}
        onValueChange={setLanguage}
      />
    </View>
  );
};

export default AccountSettingsSection;
