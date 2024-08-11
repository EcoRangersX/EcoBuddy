import StartQuiz, { StartQuizProps } from './StartQuiz';
import { View } from 'react-native';

interface StartQuizList {
  quizzes: StartQuizProps[];
}

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
