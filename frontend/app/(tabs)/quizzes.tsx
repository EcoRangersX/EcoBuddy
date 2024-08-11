import { ScrollView, View } from 'react-native';
import Header from '@/components/Header';
import TestKnowledgeSection from '@/components/Quizzes/TestKnowledgeSection';

export default function ArticlesScreen() {
  return (
    <ScrollView>
      <Header />
      <TestKnowledgeSection />
    </ScrollView>
  );
}
