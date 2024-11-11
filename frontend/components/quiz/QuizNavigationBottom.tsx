import { View, Text, TouchableOpacity } from 'react-native';

interface NavigationButtonsProps {
  currentIndex: number;
  totalQuestions: number;
  onSkip: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

const QuizNavigationBottom = ({
  onNext,
  onSkip,
  onSubmit,
  currentIndex,
  totalQuestions,
}: NavigationButtonsProps) => {
  return (
    <>
      {currentIndex === totalQuestions - 1 ? (
        <View className='flex-row justify-center p-4'>
          <TouchableOpacity
            className="bg-green-500 rounded-full px-6 py-3"
            onPress={onSubmit}>
            <Text className="text-white font-semibold">Submit</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className='flex-row justify-between p-4'>
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
      )}
    </>
  );
};

export default QuizNavigationBottom;
