import { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import AnswerOption from './AnswerOption';
import QuizHeader from './QuizHeader';
import QuizNavigationBottom from './QuizNavigationBottom';
import { QuizQuestionProps } from '@/hooks/quizzes/useQuizInfo';
import Modal from 'react-native-modal';
import { Button } from 'react-native-paper';

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
    setShowFeedback(false);
  };

  const handleOnSkip = () => {
    nextQuestion();
  };

  const handleOnSubmit = () => {
    // Implement logic to submit the current question
    console.log('Submitting the answers');
  };

  const handleCloseFeedback = () => {
    setShowFeedback(false);
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
            onSelect={() =>
              handleOnSelect(option.id, currentQuestion['correct-answer'])
            }
          />
        ))}
        {/* Feedback Modal */}
        <Modal
          isVisible={showFeedback}
          animationInTiming={500}
          animationOutTiming={500}
          animationIn={'zoomIn'}
          animationOut={'zoomOut'}>
          <View className="bg-white p-10 rounded-md">
            <Text
              className={`text-center text-lg ${
                isCorrect ? 'text-green-500' : 'text-[#39c05b]'
              }`}>
              {isCorrect
                ? `🎉 Keep it up! ${'\n'} You got it right!`
                : `💪 Oops! Don't worry, you'll get the next one!`}
            </Text>
            <View className="relative mt-16">
              <Button
                onPress={nextQuestion}
                style={{
                  position: 'absolute',
                  bottom: -20,
                  right: -20,
                }}
                textColor="black"
                mode="contained-tonal">
                <Text className="text-base">Next</Text>
              </Button>
              <Button
                mode="contained-tonal"
                style={{
                  position: 'absolute',
                  bottom: -20,
                  left: -20,
                }}
                onPress={handleCloseFeedback}>
                <Text className="text-base">Try Again</Text>
              </Button>
            </View>
          </View>
        </Modal>
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
