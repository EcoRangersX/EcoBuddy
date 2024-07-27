import { useState, useRef, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Animated, Easing } from 'react-native';
import { Drawer, Portal, Modal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

interface SideMenuProps {
  visible: boolean;
  onDismiss: () => void;
}

export default function SideMenu({ visible, onDismiss }: SideMenuProps) {
  const navigation = useNavigation();
  const [active, setActive] = useState<string>('');
  const slideAnim = useRef(new Animated.Value(-500)).current

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
        toValue: -500,
        duration: 350,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim])

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss}>
        <TouchableWithoutFeedback onPress={onDismiss}>
          <View>
            <TouchableWithoutFeedback>
              <Animated.View style={{ transform: [{ translateX: slideAnim }]}} className="bg-white h-full w-[75%]">
                <Drawer.Section className="p-2">
                  <Drawer.Item
                    label="First Item"
                    active={active === 'first'}
                    onPress={() => {
                      setActive('first');
                      navigation.navigate('quiz');
                      onDismiss();
                    }}
                    className="mb-4"
                  />
                  <Drawer.Item
                    label="Second Item"
                    active={active === 'second'}
                    onPress={() => {
                      setActive('second');
                      navigation.navigate('profile');
                      onDismiss();
                    }}
                  />
                </Drawer.Section>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </Portal>
  );
}
