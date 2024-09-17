import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AnswerOption from './AnswerOption';
import QuizHeader from './QuizHeader';

interface QuizScreenProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  options: string[];
  correctAnswer: string;
  onNext: () => void;
  onSkip: () => void;
  onBack: () => void;
  onBookmark: () => void;
}


const QuestionCard = ({ question }: { question: string }) => (
  <View className="bg-blue-500 rounded-lg p-6 m-4">
    <Text className="text-white text-xl text-center">{question}</Text>
  </View>
);


const NavigationButtons = ({
  onSkip,
  onNext,
}: {
  onSkip: () => void;
  onNext: () => void;
}) => (
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

const QuizCard = ({
  questionNumber,
  totalQuestions,
  question,
  options,
  onNext,
  onSkip,
  onBack,
  onBookmark,
}: QuizScreenProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  return (
    <View className="flex-1 bg-cyan-300">
      <QuizHeader
        questionNumber={questionNumber}
        totalQuestions={totalQuestions}
        onBack={onBack}
        onBookmark={onBookmark}
      />
      <QuestionCard question={question} />
      <View className="flex-1 justify-center">
        {options.map((option, index) => (
          <AnswerOption
            key={index}
            label={String.fromCharCode(65 + index)}
            option={option}
            isSelected={selectedAnswer === option}
            onSelect={() => setSelectedAnswer(option)}
          />
        ))}
      </View>
      <NavigationButtons onSkip={onSkip} onNext={onNext} />
    </View>
  );
};

export default QuizCard;
