import { View, Text } from 'react-native';

interface QuizResultProps {
  title: string;
  correctAnswers: number;
  quizQuestions: number;
	bgColor?: string;
}

const QuizResult = ({
  title,
  correctAnswers,
  quizQuestions,
	bgColor = "#55c96d",
}: QuizResultProps) => {
  return (
    <View style={{backgroundColor: bgColor}} className="flex-row rounded-full items-center justify-between shadow-md shadow-black mb-2">
      <Text>{title}</Text>
			<View className='bg-[#86cb95] rounded-full'>
				<Text>{correctAnswers}/{quizQuestions}</Text>
			</View>
    </View>
  );
};

export default QuizResult;
