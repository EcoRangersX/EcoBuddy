import ScoreCircle from './ScoreCircle';
import { View, Text } from 'react-native';

interface ScoresDashboardProps {
  quizScores: number;
  articleScores: number;
  maxScore: number;
  score: number;
  size?: number;
  width?: number;
}

const ScoresDashboard = ({
  quizScores,
  articleScores,
  maxScore,
    score,
    size = 150,
    width = 15,
}: ScoresDashboardProps) => {
  return (
    <View className="flex flex-row py-3 justify-around bg-white rounded-md shadow-md shadow-black">
      <ScoreCircle maxScore={maxScore} score={score} size={size} width={width} />
      <View className="flex">
        <Text className="text-lg">Quiz Scores: {quizScores}</Text>
        <Text className="text-lg">Article Scores: {articleScores}</Text>
      </View>
    </View>
  );
};

export default ScoresDashboard;
