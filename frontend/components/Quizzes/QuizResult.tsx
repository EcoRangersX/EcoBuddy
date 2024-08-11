import { View, Text } from 'react-native';
import { QuizResultProps } from '@/types/quizzes';


const QuizResult = ({
  title,
  correctAnswers,
  quizQuestions,
  bgColor = '#55c96d',
}: QuizResultProps) => {
  return (
    <View
      style={{ backgroundColor: bgColor }}
      className="flex-row rounded-full items-center justify-between shadow-md shadow-black mb-3 p-2">
      <Text className="text-white font-semibold">{title}</Text>
      <View className="bg-[#85d897] rounded-full p-2">
        <Text className="text-white">
          {correctAnswers}/{quizQuestions}
        </Text>
      </View>
    </View>
  );
};

export default QuizResult;
