import { Text, View } from 'react-native';
import QuizStreak from './QuizStreak';
import TakenQuizzesList from './TakenQuizzesList';
import { QuizResultProps } from '@/types/quizzes';

interface YourScoresSectionProps {
  streak: number;
  bestStreak: number;
  takenQuizzes: QuizResultProps[];
}

const YourScoresSection = ({
  streak,
  bestStreak,
  takenQuizzes,
}: YourScoresSectionProps) => {
  return (
    <View className="p-3">
      <Text className="text-xl mb-2">Your Scores</Text>
      <View className="mb-3">
        <QuizStreak streak={streak} bestStreak={bestStreak} />
      </View>
      <TakenQuizzesList takenQuizzes={takenQuizzes} />
    </View>
  );
};

export default YourScoresSection;
