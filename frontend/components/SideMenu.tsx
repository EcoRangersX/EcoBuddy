import { useRef, useEffect } from 'react';
import { View, Animated, Easing, TouchableOpacity, Text } from 'react-native';
import { Drawer, Portal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { CloseSideBarIcon } from '@/components/icons/HomeIcons';

interface SideMenuProps {
  visible: boolean;
  closeMenu: () => void;
}

export default function SideMenu({ visible, closeMenu }: SideMenuProps) {
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 350,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 350,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  return (
    <Portal>
      <View>
        <Animated.View
          style={{ transform: [{ translateX: slideAnim }] }}
          className="flex bg-white h-full w-[75%] mt-10 relative">
          <View className='flex flex-row items-center p-5'>
            <Text className='text-base'>Username123</Text>
            <TouchableOpacity
            onPress={closeMenu}
            className="absolute right-2 top-2">
            <CloseSideBarIcon size={30} />
          </TouchableOpacity>
          </View>
          <Drawer.Section className="">
            <Drawer.Item
              label="Quizzes"
              onPress={() => {
                navigation.navigate('quiz');
                closeMenu();
              }}
            />
            <Drawer.Item
              label="Profile"
              onPress={() => {
                navigation.navigate('profile');
                closeMenu();
              }}
            />
          </Drawer.Section>
        </Animated.View>
      </View>
    </Portal>
  );
}
