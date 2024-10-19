import { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import AnswerOption from './AnswerOption';
import QuizHeader from './QuizHeader';
import QuizNavigationBottom from './QuizNavigationBottom';
import { QuizQuestionProps } from '@/hooks/quizzes/useQuizInfo';

interface QuizScreenProps {
  quiz_id: number;
  questions: QuizQuestionProps[] ;
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
 * @param {QuizScreenProps} props - The properties for the QuizCard component.
 * @param {string} props.quiz_id - The unique identifier for the quiz.
 * @param {number} props.totalQuestions - The total number of questions in the quiz.
 * @param {Array} props.questions - The list of questions in the quiz.
 *
 * @returns {JSX.Element} The rendered QuizCard component.
 *
 * @description
 * This component handles the display and navigation of quiz questions. It allows users to select answers, skip questions, and submit their responses.
 * The component maintains the state of selected answers and the current question index.
 *
 * @example
 * <QuizCard quiz_id="123" totalQuestions={10} questions={questionsArray} />
 *
 * @function
 * @name QuizCard
 *
 * @remarks
 * The component uses the `selectedAnswers` state to keep track of the user's selected answers.
 * It determines whether an option is selected by checking if the `selectedAnswers` array contains an entry with the same `question_id` and `selected_option` as the current option.
 */
const QuizCard = ({ quiz_id, totalQuestions, questions }: QuizScreenProps) => {
  // const [selectedAnswers, setSelectedAnswers] = useState<AnswerProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

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
  };

  const handleOnSkip = () => {
    nextQuestion();
  };

  const handleOnSubmit = () => {
    // Implement logic to submit the current question
    console.log('Submitting the answers');
  };

  const currentQuestion = questions[currentIndex];

  const handleOnSelect = (option_id: number, correct_id: number) => {
    if (option_id === correct_id) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowFeedback(true);
  };

  return (
    <ScrollView className="bg-cyan-300 p-3">
      <View className="mb-3">
        <QuizHeader
          questionNumber={currentIndex + 1}
          totalQuestions={totalQuestions}
          onBack={previousQuestion}
          onBookmark={handleBookmarkQuiz}
        />
      </View>
      <View className="bg-[#e1f3f7] rounded-md mb-8">
        <QuestionCard question={currentQuestion.question} />
        {currentQuestion.options.map(option => (
          <AnswerOption
            key={option.id}
            label={option.id + 1}
            option={option.text}
            // isSelected={()=>console.log()}
            onSelect={() => handleOnSelect(option.id, currentQuestion['correct-answer'])}
          />
        ))}
        {showFeedback && (
          <View className="p-4">
            <Text className={`text-center ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
              {isCorrect ? 'Correct!' : 'Incorrect!'}
            </Text>
          </View>
        )}
        <QuizNavigationBottom
          onSkip={handleOnSkip}
          onNext={nextQuestion}
          onSubmit={handleOnSubmit}
          totalQuestions={totalQuestions}
          currentIndex={currentIndex}
        />
      </View>
    </ScrollView>
  );
};

export default QuizCard;
