import { ScrollView, View } from 'react-native';
import Header from '@/components/Header';
import TestKnowledgeSection from '@/components/Quizzes/TestKnowledgeSection';
import QuizOfTheDaySection from '@/components/Quizzes/QuizOfTheDaySection';
import YourScoresSection from '@/components/Quizzes/YourScoresSection';
import { quizzes, quizOfTheDay } from '@/constants/StaticData';

export default function QuizzesScreen() {

  return (
    <ScrollView>
      <Header />
      <TestKnowledgeSection quizzes={quizzes} />
      <View className="mt-5">
        <QuizOfTheDaySection
          quiz_id={quizOfTheDay.quiz_id}
          level={quizOfTheDay.level}
          title={quizOfTheDay.title}
          description={quizOfTheDay.description}
          questionsCount={quizOfTheDay.questionsCount}
        />
      </View>
      <YourScoresSection streak={23} />
    </ScrollView>
  );
}
