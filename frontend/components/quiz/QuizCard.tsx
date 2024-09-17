import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AnswerOption from './AnswerOption';
import QuizHeader from './QuizHeader';

interface QuizScreenProps {
  quiz_id: number;
  questionNumber: number;
  totalQuestions: number;
  question: string;
  options: { id: number; text: string }[];
  correctAnswer: number;
}

const QuestionCard = ({ question }: { question: string }) => (
  <View className="bg-blue-500 rounded-lg p-6 m-4">
    <Text className="text-white text-xl text-center">{question}</Text>
  </View>
);

const NavigationButtons = ({
  onSkip,
  onNext,
  onSubmit,
}: {
  onSkip: () => void;
  onNext: () => void;
  onSubmit: () => void;
}) => {
  return (
    <View className="flex-row justify-between p-4">
      <TouchableOpacity
        className="bg-gray-300 rounded-full px-6 py-3"
        onPress={onSkip}>
        <Text className="text-gray-700 font-semibold">Skip</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-blue-500 rounded-full px-6 py-3"
        onPress={onNext}>
        <Text className="text-white font-semibold">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const QuizCard = ({
  quiz_id,
  questionNumber,
  totalQuestions,
  question,
  options,
}: QuizScreenProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleBookmarkQuiz = () => {
    // TODO: Implement hook to bookmark quiz by quiz_id
    console.log(`Bookmarking quiz with id: ${quiz_id}`);
  };

  const previousQuestion = () => {
    // Implement logic to navigate to the previous question
    console.log('Navigating to the previous question');
  };

  const nextQuestion = () => {
    // Implement logic to navigate to the next question
    console.log('Navigating to the next question');
  };

  const handleOnSkip = () => {
    // Implement logic to skip the current question
    console.log('Skipping the current question');
  };

  const handleOnSubmit = () => {
    // Implement logic to submit the current question
    console.log('Submitting the answers');
  };

  console.log(`Selected answer: ${selectedAnswer}`);

  return (
    <View className="flex-1 bg-cyan-300 ">
      <View className='m-4'>
        <QuizHeader
          questionNumber={questionNumber}
          totalQuestions={totalQuestions}
          onBack={previousQuestion}
          onBookmark={handleBookmarkQuiz}
        />
      </View>
      <View className="bg-[#e1f3f7] flex-1">
        <QuestionCard question={question} />
        <View className="flex-1 justify-center">
          {options.map((option, index) => (
            <AnswerOption
              key={index}
              label={index + 1}
              option={option.text}
              isSelected={selectedAnswer === option.id}
              onSelect={() => setSelectedAnswer(option.id)}
            />
          ))}
        </View>
        <NavigationButtons
          onSkip={handleOnSkip}
          onNext={nextQuestion}
          onSubmit={handleOnSubmit}
        />
      </View>
    </View>
  );
};

export default QuizCard;
