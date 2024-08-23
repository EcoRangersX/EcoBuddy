import { Text, View } from 'react-native';
import Header from '@/components/Header';

export default function ProfileScreen() {
  return (
    <View>
      <Header />
      <Text className="p-20 font-bold text-lg padding-80px">
        Profile Page
      </Text>
    </View>
  );
}
