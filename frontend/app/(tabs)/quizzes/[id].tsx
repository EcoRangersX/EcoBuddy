import { View, Text } from 'react-native';
import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import QuizIntroduction from '@/components/quiz/QuizIntroduction';
import Header from '@/components/Header';
import QuizCard from '@/components/quiz/QuizCard';

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
      <QuizIntroduction isVisible={isVisible} onClose={handleOnClose} />
      <QuizCard
        questionNumber={3}
        totalQuestions={10}
        question="What Is The Primary Source Of Energy For Most Ecosystems?"
        options={['Water', 'Soil', 'The Sun', 'Wind']}
        correctAnswer="The Sun"
        onNext={() => {}}
        onSkip={() => {}}
        onBack={() => {}}
        onBookmark={() => {}}
      />
    </View>
  );
}
