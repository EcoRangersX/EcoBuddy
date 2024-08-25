import { View } from 'react-native';
import QuizResult from './quizzes/QuizResult';
import { QuizResultProps } from '@/types/quizzes';

interface TakenQuizListProps {
  takenQuizzes: QuizResultProps[];
}

/**
 * Renders a list of taken quizzes.
 *
 * @component
 * @param {Object[]} takenQuizzes - An array of taken quizzes.
 * @returns {JSX.Element} - The rendered component.
 */
const TakenQuizzesList = ({ takenQuizzes }: TakenQuizListProps) => {
  return (
    <View className="bg-white p-4 rounded-[30px] border-2 border-[#4ac965]">
      {takenQuizzes.map((takenQuiz, index) => (
        <View key={index}>
          <QuizResult
            title={takenQuiz.title}
            correctAnswers={takenQuiz.correctAnswers}
            quizQuestions={takenQuiz.quizQuestions}
          />
        </View>
      ))}
    </View>
  );
};

export default TakenQuizzesList;
