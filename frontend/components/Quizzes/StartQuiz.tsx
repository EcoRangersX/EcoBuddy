import { View, Text, TouchableOpacity } from 'react-native';

type StartQuizProps = {
  level: string;
  questionsCount: number;
  title: string;
  description: string;
  onStart?: () => void;
};

const StartQuiz = ({ level, questionsCount, title, description, onStart }: StartQuizProps) => {
  return (
    <View className="p-4 bg-white rounded-lg shadow-md">
      <View className="flex-row justify-between mb-2">
        <Text className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">{level}</Text>
        <Text className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">questions: {questionsCount}</Text>
      </View>
      <Text className="text-xl font-bold text-teal-700 mb-2">{title}</Text>
      <Text className="text-gray-600 mb-4">{description}</Text>
      <TouchableOpacity onPress={onStart} className="flex-row items-center bg-teal-500 px-4 py-2 rounded-full">
        <Text className="text-white font-bold mr-2">Start Quiz</Text>
        <View className="bg-white p-2 rounded-full">
          <Text className="text-teal-500 font-bold">{'>'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default StartQuiz;
