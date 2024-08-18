import { ScrollView, View } from 'react-native';
import Header from '@/components/Header';
import TestKnowledgeSection from '@/components/dsads/TestKnowledgeSection';
import QuizOfTheDaySection from '@/components/dsads/QuizOfTheDaySection';
import YourScoresSection from '@/components/dsads/YourScoresSection';
import { quizzesStatic, quizOfTheDayStatic, takenQuizzesStatic, leaderboardUsersStatic } from '@/constants/StaticData';
import LeaderbordSection from '@/components/LeaderboardSection';

export default function QuizzesScreen() {
  return (
    <ScrollView>
      <Header />
      <TestKnowledgeSection quizzes={quizzesStatic} />
      <View className="mt-5">
        <QuizOfTheDaySection
          quiz_id={quizOfTheDayStatic.quiz_id}
          level={quizOfTheDayStatic.level}
          title={quizOfTheDayStatic.title}
          description={quizOfTheDayStatic.description}
          questionsCount={quizOfTheDayStatic.questionsCount}
        />
      </View>
      <YourScoresSection
        streak={1}
        bestStreak={11}
        takenQuizzes={takenQuizzesStatic}
      />
      <LeaderbordSection users={leaderboardUsersStatic} />
    </ScrollView>
  );
}
