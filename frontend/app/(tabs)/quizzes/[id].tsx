import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import QuizIntroduction from '@/components/quiz/QuizIntroduction';
import TopTabs from '@/components/quizzes/TopTabs';
import Header from '@/components/Header';

export default function QuizScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const { id } = useLocalSearchParams();

  const handleOnClose = () => {
    setIsVisible(false);
  };

  // TODO: Implement hook to fetch quiz data using id from local search params

  return (
    <View className="flex-1">
      <Header />
      <TopTabs />
      <QuizIntroduction isVisible={isVisible} onClose={handleOnClose} />
    </View>
  );
}
