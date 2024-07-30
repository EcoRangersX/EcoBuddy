import { Text, TouchableOpacity, View } from 'react-native';

interface QuizItemProps {
  title: string;
  textColor: string;
  elementBgColor: string;
}

const QuizItem = ({ title, textColor, elementBgColor }: QuizItemProps) => {
  return (
    <View>
      <TouchableOpacity
        style={{ backgroundColor: elementBgColor }}
        className="rounded-xl p-2 shadow-sm shadow-black">
        <Text
          style={{ color: textColor }}
          className="text-center text-base font-semibold">
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizItem;
