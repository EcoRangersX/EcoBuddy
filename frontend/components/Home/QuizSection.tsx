import React from 'react';
import { View, Text } from 'react-native';
import QuizItem from './QuizItem';

interface QuizSectionProps {
  title: string;
  items: string[];
}

const QuizSection: React.FC<QuizSectionProps> = ({ title, items }) => {
  return (
    <View className="p-4 bg-green-300 rounded-lg shadow-lg ml-4">
      <Text className="text-left text-lg text-black font-bold px-5">
        {title}
      </Text>
      <View className="flex">
        {items.map((item, index) => (
          <View key={index} className="w-1/2 p-2">
            <QuizItem title={item} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default QuizSection;
