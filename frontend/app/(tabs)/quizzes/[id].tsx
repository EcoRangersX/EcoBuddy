import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import QuizIntroduction from '@/components/quiz/QuizIntroduction';
import { quizStepsStatic } from '@/constants/StaticData';

export default function QuizScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View className="">
      <Text className="text-xl font-semibold">Quiz Screen with the id: {id}</Text>
      <View className=''>
        <QuizIntroduction steps={quizStepsStatic} />
      </View>
    </View>
  );
}
