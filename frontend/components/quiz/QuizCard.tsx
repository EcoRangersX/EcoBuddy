import { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import AnswerOption from './AnswerOption';
import QuizHeader from './QuizHeader';
// import QuizNavigationBottom from './QuizNavigationBottom';
import { QuizQuestionProps } from '@/hooks/quizzes/useQuizInfo';
import { ModalFeedback } from './ModalFeedback';

interface QuizScreenProps {
  quiz_id: number;
  questions: QuizQuestionProps[];
  totalQuestions: number;
}

const QuestionCard = ({ question }: { question: string }) => (
  <View className="bg-blue-500 rounded-lg p-2 m-4">
    <Text className="text-white text-xl text-center">{question}</Text>
  </View>
);

/**
 * QuizCard component renders a quiz interface with navigation and answer selection.
 *
 * @component
 * @param {string} props.quiz_id - The unique identifier for the quiz.
 * @param {number} props.totalQuestions - The total number of questions in the quiz.
 * @param {Array} props.questions - The list of questions in the quiz.
 *
 * @returns {JSX.Element} The rendered QuizCard component.
 *
 * @example
 * <QuizCard quiz_id={5} totalQuestions={10} questions={questionsArray} />
 */
const QuizCard = ({ quiz_id, totalQuestions, questions }: QuizScreenProps) => {
  // Uncomment when implementing the logic for submitting answers
  // const [selectedAnswers, setSelectedAnswers] = useState<AnswerProps[]>([]);

  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [isViewResults, setIsViewResults] = useState<boolean>(false);

  const handleBookmarkQuiz = () => {
    // TODO: Implement hook to bookmark quiz by quiz_id
    console.log(`Bookmarking quiz with id: ${quiz_id}`);
  };

  const previousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextQuestion = () => {
    if (totalQuestions && currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    setShowFeedback(false);
  };

  // const handleOnSkip = () => {
  //   nextQuestion();
  // };

  // const handleOnSubmit = () => {
  //   // Implement logic to submit the current question
  //   console.log('Submitting the answers');
  // };

  // Uncomment when implementing the logic for "Try Again" button
  // const handleCloseFeedback = () => {
  //   setShowFeedback(false);
  // };

  const currentQuestion = questions[currentIndex];

  const handleOnSelect = (option_id: number, correct_id: number) => {
    if (option_id === correct_id) {
      setIsAnswerCorrect(true);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIsAnswerCorrect(false);
    }
    setShowFeedback(true);
  };

  const viewResults = () => {
    setIsViewResults(true);
  };

  const correctAnswerIndex = currentQuestion['correct-answer'];
  const correctAnswer = currentQuestion.options[correctAnswerIndex].text;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  return (
    <View className="bg-cyan-300 h-full">
      {!isViewResults ? (
        <ScrollView className="p-3">
          <View className="mb-3">
            <QuizHeader
              questionNumber={currentIndex + 1}
              totalQuestions={totalQuestions}
              onBack={previousQuestion}
              onBookmark={handleBookmarkQuiz}
            />
          </View>
          <View className="bg-[#e1f3f7] rounded-md">
            <QuestionCard question={currentQuestion.question} />
            {currentQuestion.options.map(option => (
              <AnswerOption
                key={option.id}
                label={option.id + 1}
                option={option.text}
                // isSelected={()=>console.log()}
                onSelect={() =>
                  handleOnSelect(option.id, currentQuestion['correct-answer'])
                }
              />
            ))}
            {/* Feedback Modal */}
            <ModalFeedback
              isAnswerCorrect={isAnswerCorrect}
              correctAnswer={correctAnswer}
              isVisible={showFeedback}
              isLastQuestion={isLastQuestion}
              nextQuestion={nextQuestion}
              showResults={viewResults}
            />
            {/* Bottom Navigation isn't useful if using Modal */}
            {/*             
              <QuizNavigationBottom
                onSkip={handleOnSkip}
                onNext={nextQuestion}
                onSubmit={handleOnSubmit}
                totalQuestions={totalQuestions}
                currentIndex={currentIndex}
              /> 
            */}
          </View>
        </ScrollView>
      ) : (
        <View className="bg-white rounded-md p-5 mt-2 shadow-lg m-5 shadow-black">
          <Text className="text-center text-lg">
            Congrats! You have completed the quiz! 🎉
          </Text>
          <Text className="text-center text-lg mt-1">
            You scored <Text className="font-bold">{correctAnswers}</Text> out
            of <Text className="font-bold">{totalQuestions}</Text> questions.
          </Text>
        </View>
      )}
    </View>
  );
};

export default QuizCard;
