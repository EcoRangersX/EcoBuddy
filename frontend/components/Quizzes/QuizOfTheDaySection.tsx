import StartQuiz from './StartQuiz';
import { View, Text } from 'react-native';
import { StartQuizProps } from '@/types/quizzes';

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
