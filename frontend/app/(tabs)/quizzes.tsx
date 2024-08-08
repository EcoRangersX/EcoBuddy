import { ScrollView, Text } from 'react-native';
import Header from '@/components/Header';
import StartQuiz from '@/components/Quizzes/StartQuiz';

export default function ArticlesScreen() {
  return (
    <ScrollView>
      <Header />
      <Text className="text-xl">Test Your Knowledge</Text>
      <StartQuiz
        level="Beginner"
        questionsCount={24}
        title="Ecology basics"
        description="Questions about ecosystems, biodiversity, and basic ecological concepts"
      />
    </ScrollView>
  );
}
