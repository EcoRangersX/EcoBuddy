import { Appbar } from 'react-native-paper';
import { useState } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import SideMenu from '@/components/SideMenu';
import AppLogo from './icons/AppLogo';

function Header() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setVisible(!visible);
  };

  const goToSettings = () => {
    router.push("/settings");
  }

  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.Action icon="menu" onPress={toggleMenu} />
      <SideMenu visible={visible} closeMenu={toggleMenu} />
      <View className='flex-1 items-center justify-center'>
        <AppLogo width={70} height={70} />
      </View>
      <Appbar.Action
        onPress={goToSettings}
        icon="cog"
      />
    </Appbar.Header>
  );
}

export default Header;
