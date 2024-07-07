import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function Header () {
  const navigation = useNavigation();

  return (
    <Appbar.Header mode='center-aligned'>
      <Appbar.Content title="EcoBuddy-AI" />
      <Appbar.Action onPress={() => navigation.navigate('Profile')} icon="cog" />
    </Appbar.Header>
  );
};

export default Header;
