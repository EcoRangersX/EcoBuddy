import StartQuiz from './StartQuiz';
import { StartQuizProps } from '@/types/quizzes';
import { View } from 'react-native';

interface StartQuizList {
  quizzes: StartQuizProps[];
}

/**
 * Renders a list of quizzes to start.
 *
 * @component
 * @param {Object[]} quizzes - An array of quiz objects.
 * @param {number} quizzes[].quiz_id - The ID of the quiz.
 * @param {string} quizzes[].level - The level of the quiz.
 * @param {number} quizzes[].questionsCount - The number of questions in the quiz.
 * @param {string} quizzes[].bgColor - The background color of the quiz.
 * @param {string} quizzes[].titleBgColor - The background color of the quiz title.
 * @param {string} quizzes[].title - The title of the quiz.
 * @param {string} quizzes[].description - The description of the quiz.
 * @returns {JSX.Element} The rendered component.
 */
const StartQuizList = ({ quizzes }: StartQuizList) => {
  return (
    <View className="flex-col">
      {quizzes.map((quiz, index) => (
        <View key={index} className="">
          <StartQuiz
            quiz_id={quiz.quiz_id}
            level={quiz.level}
            questionsCount={quiz.questionsCount}
            bgColor={quiz.bgColor}
            titleBgColor={quiz.titleBgColor}
            title={quiz.title}
            description={quiz.description}
          />
        </View>
      ))}
    </View>
  );
};

export default StartQuizList;
