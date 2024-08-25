import ScoreCircle from './ScoreCircle';
import { View, Text } from 'react-native';

interface ScoresDashboardProps {
  quizScores: number;
  articleScores: number;
  maxScore: number;
  score: number;
  size: number;
  width: number;
}

const ScoresDashboard = ({
  quizScores,
  articleScores,
  maxScore,
  score,
  size,
  width,
}: ScoresDashboardProps) => {
  return (
    <View className="flex flex-row justify-between p-2 bg-white border-2 border-[#4ac965] rounded-md shadow-sm shadow-black">
      <ScoreCircle
        maxScore={maxScore}
        score={score}
        size={size}
        width={width}
      />
      <View className="flex">
        <Text className="text-base">
          <Text className="font-semibold">Quiz Scores: </Text>
          {quizScores}
        </Text>
        <Text className="text-base">
          <Text className="font-semibold">Article Scores: </Text>
          {articleScores}
        </Text>
      </View>
    </View>
  );
};

export default ScoresDashboard;
