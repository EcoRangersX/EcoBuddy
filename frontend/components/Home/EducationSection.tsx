import { View } from 'react-native';
import QuizSection from './QuizSection';

interface EducationSectionProps {
  title: string;
  items: string[];
}

const EducationSection = ({ title, items }: EducationSectionProps) => {
  return (
    <View className="p-6">
      <QuizSection title={title} items={items} />
    </View>
  );
};

export default EducationSection;
