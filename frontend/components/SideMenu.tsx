import { useState, useRef, useEffect } from 'react';
import { View, Animated, Easing } from 'react-native';
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
          className="bg-white h-full w-[75%] mt-10">
          <Drawer.Section className="">
            <Drawer.Item label='Close SideBar' onPress={closeMenu}>
            </Drawer.Item>
            {/* <CloseSideBarIcon size={30} /> */}
            <Drawer.Item
              label="First Item"
              onPress={() => {
                navigation.navigate('quiz');
                closeMenu();
              }}
              className="mb-4"
            />
            <Drawer.Item
              label="Second Item"
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
