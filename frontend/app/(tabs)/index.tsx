import { View, Text } from 'react-native';
import AQIComponent from '@/components/AQIComponent';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Home Screen</Text>
      <View className="">
        <AQIComponent />
      </View>
    </View>
  );
}
