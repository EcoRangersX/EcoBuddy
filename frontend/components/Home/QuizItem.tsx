import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface QuizAiItemProps {
  title: string;
}

const QuizItem: React.FC<QuizAiItemProps> = ({ title }) => {
  return (
    <TouchableOpacity className="bg-green-200 rounded-full p-4 m-2 shadow-md flex-1">
      <Text className="text-center text-base text-green-700 font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default QuizItem;
