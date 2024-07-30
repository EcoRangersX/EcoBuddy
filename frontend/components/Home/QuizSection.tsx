import React from 'react';
import { View, Text } from 'react-native';
import QuizItem from './QuizItem';

interface QuizSectionProps {
  title: string;
  items: string[];
}

const QuizSection: React.FC<QuizSectionProps> = ({ title, items }) => {
  return (
    <View className="p-4 bg-green-100 rounded-lg shadow-lg m-2">
      <Text className="text-left text-lg text-black font-bold mb-2 px-2">{title}</Text>
      <View className="flex-row flex-wrap justify-between">
        {items.map((item, index) => (
          <QuizItem key={index} title={item} />
        ))}
      </View>
    </View>
  );
};

export default QuizSection;
