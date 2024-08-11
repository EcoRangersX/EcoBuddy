import { Text, View } from 'react-native';
import CurrentQuizStreak from './CurrentQuizStreak';

interface YourScoresSectionProps {
  streak: number;
}

const YourScoresSection = ({ streak }: YourScoresSectionProps) => {
  return (
    <View className="p-3">
      <Text className="text-xl mb-4">Your Scores</Text>
      <View>
        <CurrentQuizStreak streak={streak} />
      </View>
    </View>
  );
};

export default YourScoresSection;
