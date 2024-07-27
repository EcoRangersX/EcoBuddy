import { Appbar } from 'react-native-paper';
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
      <Appbar.Action icon="menu" onPress={toggleMenu} />
      <SideMenu visible={visible} closeMenu={toggleMenu} />
      <Appbar.Content title="EcoBuddy" />
      <Appbar.Action
        onPress={() => navigation.navigate('profile')}
        icon="cog"
      />
    </Appbar.Header>
  );
}

export default Header;
