import { View } from 'react-native';
import AQIComponent from '@/components/AQIComponent';
import Header from '@/components/Header';

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <View className="mt-10 items-center">
        <AQIComponent />
      </View>
    </View>
  );
}
