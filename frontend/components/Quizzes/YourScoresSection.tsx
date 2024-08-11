import { Text, View } from 'react-native';
import CurrentQuizStreak from './CurrentQuizStreak';

interface YourScoresSectionProps {
  streak: number;
}

const YourScoresSection = ({ streak }: YourScoresSectionProps) => {
  return (
    <View>
      <Text className="text-xl">Your Scores</Text>
      <CurrentQuizStreak streak={streak} />
    </View>
  );
};

export default YourScoresSection;
