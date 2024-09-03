import { View, Text } from 'react-native';
import { StreakIcon } from '../Icons/QuizzesIcons';

export interface QuizStreakProps {
  streak: number;
  bestStreak: number;
}

const QuizStreak = ({ streak, bestStreak  }: QuizStreakProps) => {
  return (
    <View className="bg-white flex-row items-center justify-around rounded-xl p-2 border-2 border-[#4ac965]">
      <View className='items-center'>
        <Text className="text-base">Streak</Text>
        <View className="bg-white rounded-full items-center justify-center py-2 flex-row">
          <StreakIcon size={36} />
          <Text className="text-xl font-semibold font-row">{streak} days</Text>
        </View>
      </View>
      {/* Best Personal Streak */}
      <View className=''>
        <Text className="text-base">Best Personal</Text>
        <View className="bg-white rounded-full items-center justify-center py-2 flex-row">
          <StreakIcon size={36} />
          <Text className="text-xl font-semibold font-row">{bestStreak} days</Text>
        </View>
      </View>
    </View>
  );
};

export default QuizStreak;
