import { ScrollView, View } from 'react-native';
import { useEffect } from 'react';
import Header from '@/components/Header';
import TestKnowledgeSection from '@/components/quizzes/TestKnowledgeSection';
import QuizOfTheDaySection from '@/components/quizzes/QuizOfTheDaySection';
import { quizOfTheDayStatic } from '@/constants/StaticData';
import { useQuizzes } from '@/hooks/quizzes/useQuizzes';

export default function QuizzesScreen() {
  const { getQuizzes, quizzes, loadingQuizzes, quizzesErrorMsg } = useQuizzes();

  useEffect(() => {
    getQuizzes(5);
  }, []);  // Fetch quizzes to display as a list

  return (
    <ScrollView>
      <Header />
      <TestKnowledgeSection quizzes={quizzes?.['quiz-preview']} loading={loadingQuizzes} error={quizzesErrorMsg} />
      <View className="mt-5">
        <QuizOfTheDaySection
          id={quizOfTheDayStatic.id}
          level={quizOfTheDayStatic.level}
          title={quizOfTheDayStatic.title}
          description={quizOfTheDayStatic.description}
          amount-of-questions={quizOfTheDayStatic['amount-of-questions']}
        />
      </View>
    </ScrollView>
  );
}
