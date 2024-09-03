import StartQuiz from './StartQuiz';
import { View, Text } from 'react-native';
import { StartQuizProps } from '@/types/quizzes';

/**
 * Renders the Quiz of the Day section.
 *
 * @component
 * @param {StartQuizProps} props - The props for the QuizOfTheDaySection component.
 * @param {string} props.quiz_id - The ID of the quiz.
 * @param {string} props.level - The level of the quiz.
 * @param {number} props.questionsCount - The number of questions in the quiz.
 * @param {string} [props.bgColor='white'] - The background color of the section.
 * @param {string} [props.titleBgColor='#74c6d4'] - The background color of the title.
 * @param {string} props.title - The title of the section.
 * @param {string} props.description - The description of the section.
 * @returns {JSX.Element} The rendered QuizOfTheDaySection component.
 */
const QuizOfTheDaySection = ({
  quiz_id,
  level,
  questionsCount,
  bgColor = 'white',
  titleBgColor = '#74c6d4',
  title,
  description,
}: StartQuizProps) => {
  return (
    <View className="p-3">
      <Text className="text-xl mb-4">Quiz of the day</Text>
      <StartQuiz
        quiz_id={quiz_id}
        level={level}
        questionsCount={questionsCount}
        bgColor={bgColor}
        titleBgColor={titleBgColor}
        title={title}
        description={description}
        quizOfTheDay={true}
      />
    </View>
  );
};

export default QuizOfTheDaySection;
