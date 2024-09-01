import { View, Text } from 'react-native';
import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import QuizIntroduction from '@/components/quiz/QuizIntroduction';
import { quizStepsStatic } from '@/constants/StaticData';

export default function QuizScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const { id } = useLocalSearchParams();

  const handleOnClose = () => {
    setIsVisible(false);
  };

  // TODO: Implement hook to fetch quiz data using id from local search params

  return (
    <View className="">
      <QuizIntroduction
        steps={quizStepsStatic}
        isVisible={isVisible}
        onClose={handleOnClose}
      />
    </View>
  );
}
