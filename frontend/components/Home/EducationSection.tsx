import { View } from 'react-native';
import QuizSection from './QuizSection';

interface EducationSectionProps {
  title: string;
  items: string[];
}

const EducationSection = ({ title, items }: EducationSectionProps) => {
  return (
    <View className="p-6">
      {/* <View className="flex-col justify-around"> */}
        <QuizSection title={title} items={items} />
      {/* </View> */}
    </View>
  );
};

export default EducationSection;
