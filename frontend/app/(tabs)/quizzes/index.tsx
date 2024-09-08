import { ScrollView, View } from 'react-native';
import Header from '@/components/Header';
import TestKnowledgeSection from '@/components/quizzes/TestKnowledgeSection';
import QuizOfTheDaySection from '@/components/quizzes/QuizOfTheDaySection';
import { quizzesStatic, quizOfTheDayStatic } from '@/constants/StaticData';

export default function QuizzesScreen() {
  return (
    <ScrollView>
      <Header />
      <TestKnowledgeSection quizzes={quizzesStatic} />
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
