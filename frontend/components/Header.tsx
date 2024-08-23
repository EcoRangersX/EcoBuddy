import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View } from 'react-native';
import SideMenu from '@/components/SideMenu';
import AppLogo from './icons/AppLogo';

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
      <View className='flex-1 items-center justify-center'>
        <AppLogo width={70} height={70} />
      </View>
      <Appbar.Action
        onPress={() => navigation.navigate('profile')}
        icon="cog"
      />
    </Appbar.Header>
  );
}

export default Header;
