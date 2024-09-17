import { View, Text, TouchableOpacity } from "react-native";
import { BookmarkIcon } from "../icons/Articles";
import { PreviousIcon } from "../icons/Quiz";

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

export default QuizHeader;
