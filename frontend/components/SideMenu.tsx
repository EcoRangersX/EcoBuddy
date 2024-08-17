import { useRef, useEffect } from 'react';
import { View, Animated, Easing, TouchableOpacity, Text } from 'react-native';
import { Portal } from 'react-native-paper';
import { CloseSideBarIcon } from '@/components/Icons/HomeIcons';
import TabsDropdown from './TabsDropdown';

interface SideMenuProps {
  visible: boolean;
  closeMenu: () => void;
}

/**
 * Renders a side menu component.
 *
 * @component
 * @param {object} props - The component props.
 * @param {boolean} props.visible - Determines if the side menu is visible.
 * @param {function} props.closeMenu - Callback function to close the side menu.
 * @returns {JSX.Element} The rendered side menu component.
 */
export default function SideMenu({ visible, closeMenu }: SideMenuProps) {
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
          <View className="flex flex-row items-center p-5">
            <Text className="text-base">Username123</Text>
            <TouchableOpacity
              onPress={closeMenu}
              className="absolute right-2 top-2">
              <CloseSideBarIcon size={30} />
            </TouchableOpacity>
          </View>
          <TabsDropdown closeMenu={closeMenu} />
        </Animated.View>
      </View>
    </Portal>
  );
}
