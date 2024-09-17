import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PreviousIcon } from '../icons/Quiz';
import { BookmarkIcon } from '../icons/Articles';

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

interface HeaderProps {
  questionNumber: number;
  totalQuestions: number;
  onBack: () => void;
  onBookmark: () => void;
}

const Header = ({
  questionNumber,
  totalQuestions,
  onBack,
  onBookmark,
}: HeaderProps) => {
  return (
    <View className="flex-row justify-between items-center p-4">
      <TouchableOpacity onPress={onBack}>
        <PreviousIcon size={24} color="white" onPress={onBack} />
      </TouchableOpacity>
      <Text className="text-white text-lg font-semibold">
        Question {questionNumber}/{totalQuestions}
      </Text>
      <TouchableOpacity onPress={onBookmark}>
        <BookmarkIcon size={24} color="white" onPress={onBookmark} />
      </TouchableOpacity>
    </View>
  );
};

const QuestionCard = ({ question }: { question: string }) => (
  <View className="bg-blue-500 rounded-lg p-6 m-4">
    <Text className="text-white text-xl text-center">{question}</Text>
  </View>
);

const AnswerOption = ({
  label,
  option,
  isSelected,
  onSelect,
}: {
  label: string;
  option: string;
  isSelected: boolean;
  onSelect: () => void;
}) => (
  <TouchableOpacity
    className={`flex-row items-center bg-white rounded-full p-4 m-2 ${
      isSelected ? 'bg-green-300' : ''
    }`}
    onPress={onSelect}>
    <View
      className={`w-8 h-8 rounded-full ${
        isSelected ? 'bg-green-500' : 'bg-gray-200'
      } mr-4 items-center justify-center`}>
      <Text
        className={`text-lg ${isSelected ? 'text-white' : 'text-gray-600'}`}>
        {label}
      </Text>
    </View>
    <Text className="text-lg flex-1">{option}</Text>
    {isSelected && (
      <View className="w-6 h-6 bg-green-500 rounded-full items-center justify-center">
        <Text className="text-white">✓</Text>
      </View>
    )}
  </TouchableOpacity>
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
      <Header
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
