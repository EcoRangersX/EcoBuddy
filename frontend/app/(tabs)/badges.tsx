import { ScrollView, Text } from 'react-native';
import Badge from '@/components/badges/Badge';

export default function BadgesScreen() {
  return (
    <ScrollView className="p-10">
      <Text className="text-2xl">Badges Page</Text>
      <Badge text="Beginner" />
    </ScrollView>
  );
}
