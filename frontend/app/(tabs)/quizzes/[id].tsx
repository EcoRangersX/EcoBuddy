import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function QuizScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View className="">
      <Text className="">Quiz Screen with the id: {id}</Text>
    </View>
  );
}
