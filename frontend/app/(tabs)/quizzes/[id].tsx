import { View } from 'react-native';
import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import QuizIntroduction from '@/components/quiz/QuizIntroduction';
import Header from '@/components/Header';
import QuizCard from '@/components/quiz/QuizCard';
import { quizCardDataStatic } from '@/constants/StaticData';

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
      quiz_id={quizCardDataStatic.quiz_id}
      questionNumber={quizCardDataStatic.questionNumber}
      totalQuestions={quizCardDataStatic.totalQuestions}
      question={quizCardDataStatic.question}
      options={quizCardDataStatic.options}
      correctAnswer={quizCardDataStatic.correctAnswer}
      />
    </View>
  );
}
