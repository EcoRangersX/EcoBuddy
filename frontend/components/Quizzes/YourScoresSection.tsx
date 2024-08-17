import { Text, View } from 'react-native';
import QuizStreak from './QuizStreak';
import TakenQuizzesList from './TakenQuizzesList';
import { QuizResultProps } from '@/types/quizzes';

interface YourScoresSectionProps {
  streak: number;
  bestStreak: number;
  takenQuizzes: QuizResultProps[];
}

/**
 * Renders the section displaying the user's scores.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.streak - The current streak of the user.
 * @param {number} props.bestStreak - The best streak achieved by the user.
 * @param {Array} props.takenQuizzes - The list of quizzes taken by the user.
 * @returns {JSX.Element} The rendered component.
 */
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
