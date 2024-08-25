import { Text, View } from 'react-native';
import StreakDashboard from './StreakDashboard';
import TakenQuizzesList from './TakenQuizzesList';
import { QuizResultProps } from '@/types/quizzes';
import ScoresDashboard from './profile/ScoresDashboard';

interface YourScoresSectionProps {
  streak: number;
  bestStreak: number;
  takenQuizzes: QuizResultProps[];
  maxScore: number;
  quizScore: number;
  articleScore: number;
  score: number;
  size?: number;
  width?: number;
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
const YourAchievementsSection = ({
  streak,
  bestStreak,
  takenQuizzes,
  maxScore,
  score,
  quizScore,
  articleScore,
  size = 130,
  width = 10,
}: YourScoresSectionProps) => {
  return (
    <View className="p-3">
      <Text className="text-xl mb-2">Your Achievements</Text>
      <View className="mb-3">
        <StreakDashboard streak={streak} bestStreak={bestStreak} />
      </View>
      <View className="p-3">
        <ScoresDashboard
          maxScore={maxScore}
          size={size}
          width={width}
          score={score}
          quizScores={quizScore}
          articleScores={articleScore}
        />
      </View>
      <TakenQuizzesList takenQuizzes={takenQuizzes} />
    </View>
  );
};

export default YourAchievementsSection;
