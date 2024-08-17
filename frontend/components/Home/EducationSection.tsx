import { View } from 'react-native';
import QuizList from './QuizList';

interface EducationSectionProps {
  title: string;
  items: string[];
  elementTextColor?: string;
  elementBgColor?: string;
  titleSectionColor?: string;
  bgColor?: string;
  loading: boolean;
  errorMsg: string;
}

const EducationSection = ({
  title,
  items,
  elementTextColor = 'black',
  elementBgColor = '#d4fbdc',
  titleSectionColor = 'green',
  bgColor = '#c1facd',
  loading,
  errorMsg,
}: EducationSectionProps) => {
  return (
    <View className="p-6">
      <QuizList
        title={title}
        items={items}
        elementTextColor={elementTextColor}
        elementBgColor={elementBgColor}
        titleSectionColor={titleSectionColor}
        bgColor={bgColor}
      />
    </View>
  );
};

export default EducationSection;
