import { Text, TouchableOpacity, View } from 'react-native';

interface QuizItemProps {
  title: string;
}

const QuizItem = ({ title }: QuizItemProps) => {
  return (
    <View className=''>
      <TouchableOpacity className="bg-green-200 rounded-xl p-2">
        <Text className="text-center text-base text-black font-semibold">{title}</Text>
      </TouchableOpacity>
    </View>
    
  );
};

export default QuizItem;
