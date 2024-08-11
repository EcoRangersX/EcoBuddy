import { Text, View } from 'react-native';
import CurrentQuizStreak from './CurrentQuizStreak';
import QuizResult from './QuizResult';

interface YourScoresSectionProps {
  streak: number;
}

const YourScoresSection = ({ streak }: YourScoresSectionProps) => {
  return (
    <View className="p-3">
      <Text className="text-xl mb-4">Your Scores</Text>
      <View className=''>
        <CurrentQuizStreak streak={streak} />
      </View>
      <QuizResult title='Climate Change' correctAnswers={12} quizQuestions={15} />
    </View>
  );
};

export default YourScoresSection;
