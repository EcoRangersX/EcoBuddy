import { useState } from 'react';
import { Drawer, Text, Portal, Modal, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

interface SideMenuProps {
  visible: boolean;
  onDismiss: () => void;
}

function SideMenu ({ visible, onDismiss }: SideMenuProps) {
  const navigation = useNavigation();
  const [active, setActive] = useState<string>('');

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss} className="bg-[#fffbfe] h-full w-[75%]">
        <Drawer.Section title="Menu">
          <Drawer.Item
            label="First Item"
            active={active === 'first'}
            onPress={() => {
              setActive('quiz');
              navigation.navigate('Quiz');
              onDismiss();
            }}
          />
          <Drawer.Item
            label="Second Item"
            active={active === 'second'}
            onPress={() => {
              setActive('Settings');
              navigation.navigate('Settings');
              onDismiss();
            }}
          />
        </Drawer.Section>
      </Modal>
    </Portal>
  );
};

export default SideMenu;
