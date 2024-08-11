import { View, Text } from 'react-native';
import { StartQuizIcon } from '../Icons/QuizzesIcons';
import { StartQuizProps } from '@/types/quizzes';

const StartQuiz = ({
  quiz_id,
  level,
  questionsCount,
  bgColor = 'white',
  titleBgColor = '#74c6d4',
  title,
  description,
}: StartQuizProps) => {
  return (
    <View
      style={{ backgroundColor: bgColor }}
      className="p-4 mb-4 rounded-[30px] shadow-md shadow-black border-2 border-[#4ac965]">
      <View className="flex-row gap-2 mb-3">
        <Text className="bg-white text-black py-1 px-2 shadow-md shadow-black rounded-full text-xs">
          {level}
        </Text>
        <Text className="bg-white text-black px-2 py-1 shadow-md shadow-black rounded-full text-xs">
          Questions: {questionsCount}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: titleBgColor,
        }}
        className="flex-row items-center justify-between px-4 py-2 rounded-full">
        <Text className="text-white font-bold mr-2">{title}</Text>
        <StartQuizIcon quiz_id={quiz_id} />
      </View>
      <Text className="text-gray-600 mt-1">{description}</Text>
    </View>
  );
};

export default StartQuiz;
