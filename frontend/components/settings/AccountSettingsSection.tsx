import { View } from 'react-native';
import { useState } from 'react';
import ChooseLanguageDropdown from './ChooseLanguageDropdown';
import ChooseLocationDropdown from './ChooseLocationDropdown';
import { countriesStatic } from '@/constants/StaticData';
import { Button } from 'react-native-paper';

const AccountSettingsSection = () => {
  // TODO: Remove this mock data when we have appropriate hooks implemented
  const [language, setLanguage] = useState('English');
  const [country, setCountry] = useState('Poland');

  const languages = [
    { label: 'English', value: 'english' },
    { label: 'Polish', value: 'polish' },
  ];

  return (
    <>
      <View className="mb-4">
        <ChooseLanguageDropdown
          currentLanguage={language}
          languages={languages}
          onLanguageChange={setLanguage}
        />
      </View>
      <View className="mb-4">
        <ChooseLocationDropdown
          location={country}
          locations={countriesStatic}
          onLocationChange={setCountry}
        />
      </View>
      <Button mode="outlined">
        Log out
      </Button>
      <View className='mt-4'>
        <Button mode="outlined">Delete Account</Button>
      </View>
    </>
  );
};

export default AccountSettingsSection;
