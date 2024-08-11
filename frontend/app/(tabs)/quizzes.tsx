import { ScrollView, View } from 'react-native';
import Header from '@/components/Header';
import TestKnowledgeSection from '@/components/Quizzes/TestKnowledgeSection';
import QuizOfTheDaySection from '@/components/Quizzes/QuizOfTheDaySection';
import { StartQuizProps } from '@/types/quizzes';

export default function QuizzesScreen() {
  const quizOfTheDay: StartQuizProps = {
    quiz_id: 1,
    level: 'Beginner',
    questionsCount: 5,
    title: 'Ecology Quiz',
    description: 'Test your knowledge about ecology',
  };

  return (
    <ScrollView>
      <Header />
      <TestKnowledgeSection />
      <View className="mt-5">
        <QuizOfTheDaySection
          quiz_id={quizOfTheDay.quiz_id}
          level={quizOfTheDay.level}
          title={quizOfTheDay.title}
          description={quizOfTheDay.description}
          questionsCount={quizOfTheDay.questionsCount}
        />
      </View>
    </ScrollView>
  );
}
