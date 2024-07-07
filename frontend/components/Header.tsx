import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function Header () {
  const navigation = useNavigation();

  return (
    <Appbar.Header mode='center-aligned'>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="EcoBuddy" />
      <Appbar.Action onPress={() => navigation.navigate('index')} icon="cog" />
    </Appbar.Header>
  );
};

export default Header;
