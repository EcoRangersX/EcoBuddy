import { Appbar, Drawer } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import SideMenu from '@/components/SideMenu';

function Header() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    
    <Appbar.Header mode="center-aligned">
      <Appbar.Action
        icon="menu" // Use a menu icon or any appropriate icon
        onPress={toggleMenu} // This will toggle the visibility of the SideMenu
      />
      <SideMenu visible={visible} onDismiss={toggleMenu} />
      <Appbar.Content title="Eco-AI" />
      <Appbar.Action
        onPress={() => navigation.navigate('Profile')}
        icon="cog"
      />
    </Appbar.Header>
  );
}

export default Header;
