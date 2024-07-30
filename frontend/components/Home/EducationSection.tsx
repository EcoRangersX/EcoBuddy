import { View, Text } from 'react-native';
import QuizSection from './QuizSection';

interface EducationSectionProps {
  title: string;
  items: string[];
}

const EducationSection = ({ title, items }: EducationSectionProps) => {
  return (
    <View className="p-6 rounded-lg shadow-lg">
      <Text className="text-center text-2xl font-bold mb-4">{title}</Text>
      <View className="flex-col justify-around">
        <QuizSection title="Quiz" items={items} />
      </View>
    </View>
  );
};

export default EducationSection;
