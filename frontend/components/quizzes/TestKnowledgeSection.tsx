import { Text, View } from 'react-native';
import StartQuizList from './StartQuizList';
import { StartQuizProps } from '@/types/quizzes';

interface TestKnowledgeSectionProps {
  quizzes: StartQuizProps[];
}

/**
 * Renders a section for testing knowledge.
 *
 * @component
 * @param {TestKnowledgeSectionProps} props - The component props.
 * @param {Quiz[]} props.quizzes - The array of quizzes to be displayed.
 * @returns {JSX.Element} The rendered component.
 */
const TestKnowledgeSection = ({ quizzes }: TestKnowledgeSectionProps) => {
  return (
    <View className="p-3">
      <Text className="text-xl mb-4">Test Your Knowledge</Text>
      <StartQuizList quizzes={quizzes} />
    </View>
  );
};

export default TestKnowledgeSection;
