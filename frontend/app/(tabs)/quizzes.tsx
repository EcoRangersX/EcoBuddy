import { ScrollView, View } from 'react-native';
import Header from '@/components/Header';
import TestKnowledgeSection from '@/components/Quizzes/TestKnowledgeSection';
import QuizOfTheDaySection from '@/components/Quizzes/QuizOfTheDaySection';
import YourScoresSection from '@/components/Quizzes/YourScoresSection';
import { StartQuizProps } from '@/types/quizzes';

export default function QuizzesScreen() {
  const quizOfTheDay: StartQuizProps = {
    quiz_id: 1,
    level: 'Beginner',
    questionsCount: 5,
    title: 'Human Impact on the Environment',
    description: [
      'How human activities like deforestation, urbanization, and agriculture affect the environment.',
      'The concept of ecological footprints and how to reduce them.',
      'Case studies of significant environmental changes caused by human actions.',
    ],
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
      <YourScoresSection streak={23} />
    </ScrollView>
  );
}
