import { View, Text } from 'react-native-reanimated/lib/typescript/Animated';

export interface CurrentQuizStreakProps {
  streak?: number;
}

const CurrentQuizStreak = ({ streak = 0 }: CurrentQuizStreakProps) => {
  return (
    <View className="bg-white rounded-full justify-between shadow-md shadow-black border-2 border-[#4ac965]">
      <Text>Streak</Text>
      <View className="">
        {/* <StreakIcon /> */}
        <Text>{streak}</Text>
      </View>
    </View>
  );
};

export default CurrentQuizStreak;
