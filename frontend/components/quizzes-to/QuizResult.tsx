import { View, Text } from 'react-native';
import { QuizResultProps } from '@/types/quizzes';


/**
 * Renders the result of a quiz.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the quiz.
 * @param {number} props.correctAnswers - The number of correct answers.
 * @param {number} props.quizQuestions - The total number of quiz questions.
 * @param {string} [props.bgColor='#55c96d'] - The background color of the component.
 * @returns {JSX.Element} The rendered QuizResult component.
 */
const QuizResult = ({
  title,
  correctAnswers,
  quizQuestions,
  bgColor = '#55c96d',
}: QuizResultProps) => {
  return (
    <View
      style={{ backgroundColor: bgColor }}
      className="flex-row rounded-full items-center justify-between shadow-sm shadow-black mb-3 p-2">
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
