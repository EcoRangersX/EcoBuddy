import { Text, View } from 'react-native';
import StartQuizList from './StartQuizList';
import { StartQuizProps } from './StartQuiz';

const TestKnowledgeSection = () => {
  const quizzes: StartQuizProps[] = [
    {
      quiz_id: 1,
      level: 'Beginner',
      questionsCount: 10,
      title: 'Ecology basics',
      description:
        'Questions about ecosystems, biodiversity, and basic ecological concepts',
    },
    {
      quiz_id: 2,
      level: 'Intermediate',
      questionsCount: 15,
      title: 'Climate Change',
      description:
        'Questions about the causes, impacts, and solutions to climate change',
    },
    {
      quiz_id: 3,
      level: 'Intermediate',
      questionsCount: 20,
      title: 'Sustainable Development',
      description:
        'Questions about sustainable development goals and strategies',
    },
    {
      quiz_id: 4,
      level: 'Expert',
      questionsCount: 25,
      title: 'Conservation Biology',
      description:
        'Questions about conservation strategies and endangered species',
    },
  ];

  return (
    <View className="p-3">
      <Text className="text-xl mb-4">Test Your Knowledge</Text>
      <StartQuizList quizzes={quizzes} />
    </View>
  );
};

export default TestKnowledgeSection;
