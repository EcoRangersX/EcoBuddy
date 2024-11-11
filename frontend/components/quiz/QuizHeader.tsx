import { View, Text, TouchableOpacity } from 'react-native';
import { BookmarkIcon } from '../icons/Articles';
import { PreviousIcon } from '../icons/Quiz';

interface QuizHeaderProps {
  questionNumber: number;
  totalQuestions: number;
  onBack: () => void;
  onBookmark: () => void;
}

const QuizHeader = ({
  questionNumber,
  totalQuestions,
  onBack,
  onBookmark,
}: QuizHeaderProps) => {
  return (
    <View className="flex-row justify-between items-center">
      {questionNumber > 1 && (
        <TouchableOpacity onPress={onBack}>
          <PreviousIcon
            size={24}
            onPress={onBack}
            styles="shadow-sm shadow-black"
          />
        </TouchableOpacity>
      )}
      <Text className="bg-white shadow-md shadow-black text-black p-2 rounded-lg text-lg font-semibold">
        Question {questionNumber}/{totalQuestions}
      </Text>
      <TouchableOpacity onPress={onBookmark}>
        <BookmarkIcon
          size={24}
          onPress={onBookmark}
          styles="shadow-sm shadow-black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default QuizHeader;
