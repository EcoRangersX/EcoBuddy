import { Text, View } from 'react-native';
import GetGeolocation from '@/components/Geolocation';

export default function ProfileScreen() {
  return (
    <View>
      <Text className="p-20 font-bold text-lg padding-80px">
        Profile Page
      </Text>
      <GetGeolocation />
    </View>
  );
}
