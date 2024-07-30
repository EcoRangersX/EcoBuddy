import { View } from 'react-native';
import QuizSection from './QuizSection';

interface EducationSectionProps {
  title: string;
  items: string[];
  elementTextColor?: string;
  elementBgColor?: string;
  titleSectionColor?: string;
  bgColor?: string;
}

const EducationSection = ({
  title,
  items,
  elementTextColor = 'black',
  elementBgColor = '#d4fbdc',
  titleSectionColor = 'green',
  bgColor = '#c1facd',
}: EducationSectionProps) => {
  return (
    <View className="p-6">
      <QuizSection
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
