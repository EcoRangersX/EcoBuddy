import { View, Text } from 'react-native';
import { StartQuizIcon } from '../Icons/QuizzesIcons';

type StartQuizProps = {
  level: string;
  questionsCount: number;
  title: string;
  description: string;
  onStart?: () => void;
};

const StartQuiz = ({
  level,
  questionsCount,
  title,
  description,
}: StartQuizProps) => {
  return (
    <View className="p-4 bg-white mb-4 rounded-[30px] shadow-md shadow-black">
      <View className="flex-row gap-2 mb-3">
        <Text className="bg-white text-black py-1 px-2 shadow-md shadow-black rounded-full text-xs">
          {level}
        </Text>
        <Text className="bg-white text-black px-2 py-1 shadow-md shadow-black rounded-full text-xs">
          Questions: {questionsCount}
        </Text>
      </View>
      <View className="flex-row items-center justify-between bg-[#74c6d4] px-4 py-2 rounded-full">
        <Text className="text-white font-bold mr-2">{title}</Text>
        <StartQuizIcon quiz_id={16} />
      </View>
      <Text className="text-gray-600 mt-1">{description}</Text>
    </View>
  );
};

export default StartQuiz;
