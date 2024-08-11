import { View, Text } from 'react-native';
import { StreakIcon } from '../Icons/QuizzesIcons';

export interface CurrentQuizStreakProps {
  streak?: number;
}

const CurrentQuizStreak = ({ streak = 0 }: CurrentQuizStreakProps) => {
  return (
    <View className="flex-row items-center justify-between rounded-full p-2 w-1/2 border-2 border-[#4ac965]">
      <Text className='text-base'>Streak</Text>
      <View className="bg-white rounded-full items-center justify-center py-2 w-1/2 flex-row">
        <StreakIcon size={36} />
        <Text className='text-base'>{streak}</Text>
      </View>
    </View>
  );
};

export default CurrentQuizStreak;
