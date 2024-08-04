import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

interface TabsDropdownProps {
  closeMenu: () => void;
}

const TabsDropdown = ({ closeMenu }: TabsDropdownProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const items = [
    { label: 'Quiz', value: 'quiz' },
    { label: 'Articles', value: 'articles' },
    { label: 'Home', value: '/' },
    { label: 'Ai-Assistant', value: 'ai-assistant' },
    { label: 'Profile', value: 'profile' },
  ];

  const router = useRouter();

  const handleItemPress = (value: string) => {
    router.push(`${value}`);
    setDropdownVisible(false);
    closeMenu();
  };

  return (
    <View className="m-3">
      <TouchableOpacity onPress={() => setDropdownVisible(!isDropdownVisible)}>
        <Text className="text-green-700 text-lg font-bold">Select a tab</Text>
      </TouchableOpacity>
      {isDropdownVisible && (
        <View className="bg-green-100 border-4 rounded-md border-transparent mt-1">
          {items.map(item => (
            <TouchableOpacity
              key={item.value}
              onPress={() => handleItemPress(item.value)}>
              <Text className="p-2 border-b border-green-500">
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default TabsDropdown;
