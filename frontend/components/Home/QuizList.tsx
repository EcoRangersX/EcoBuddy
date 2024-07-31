import { View, Text } from 'react-native';
import QuizItem from './QuizItem';

interface QuizListProps {
  title: string;
  items: string[];
  elementTextColor: string;
  elementBgColor: string;
  titleSectionColor: string;
  bgColor?: string;
}

const QuizList = ({
  title,
  items,
  elementTextColor,
  elementBgColor,
  titleSectionColor,
  bgColor,
}: QuizListProps) => {
  return (
    <View
      style={{ backgroundColor: bgColor }}
      className="p-4 rounded-xl shadow-md shadow-black ml-4 relative">
      <View
        style={{ backgroundColor: titleSectionColor }}
        className="absolute left-4 w-[65%] rounded-full px-4 py-2 shadow-md shadow-black">
        <Text className="text-base text-center text-black font-bold">
          {title}
        </Text>
      </View>
      <View className="mt-12">
        {items.map((item, index) => (
          <View key={index} className="w-full py-2">
            <QuizItem title={item} textColor={elementTextColor} elementBgColor={elementBgColor} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default QuizList;
