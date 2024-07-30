import React from 'react';
import { View, Text } from 'react-native';
import QuizItem from './QuizItem';

interface QuizSectionProps {
  title: string;
  items: string[];
  elementTextColor: string;
  elementBgColor: string;
  titleSectionColor: string;
  bgColor?: string;
}

const QuizSection: React.FC<QuizSectionProps> = ({
  title,
  items,
  elementTextColor,
  elementBgColor,
  titleSectionColor,
  bgColor,
}) => {
  return (
    <View
      style={{ backgroundColor: bgColor }}
      className="p-4 rounded-xl shadow-md shadow-black ml-4 relative">
      <View
        style={{ backgroundColor: titleSectionColor }}
        className="absolute left-4 w-[65%] rounded-full px-4 py-2 shadow-md shadow-black">
        <Text className="text-lg text-center text-black font-bold">
          {title}
        </Text>
      </View>
      <View className="flex flex-row flex-wrap mt-12">
        {items.map((item, index) => (
          <View key={index} className="w-1/2 p-2">
            <QuizItem title={item} textColor={elementTextColor} elementBgColor={elementBgColor} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default QuizSection;
