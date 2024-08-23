import { Text, TouchableOpacity, View } from 'react-native';

interface QuizItemProps {
  title: string;
  textColor: string;
  elementBgColor: string;
}

/**
 * Renders a quiz item component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the quiz item.
 * @param {string} props.textColor - The color of the text.
 * @param {string} props.elementBgColor - The background color of the element.
 * @returns {JSX.Element} The rendered quiz item component.
 */
const QuizItem = ({ title, textColor, elementBgColor }: QuizItemProps) => {
  return (
    <View>
      <TouchableOpacity
        style={{ backgroundColor: elementBgColor }}
        className="rounded-3xl p-2 shadow-sm shadow-black">
        <Text
          style={{ color: textColor }}
          className="text-center text-sm font-semibold">
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizItem;
