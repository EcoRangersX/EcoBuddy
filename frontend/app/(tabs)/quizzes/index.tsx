import { View } from 'react-native';
import Header from '@/components/Header';
import TopQuizzesNavigationBar from '@/components/quizzes/TopQuizzesNavigationBar';

export default function QuizzesScreen() {
  return (
    <View className='flex-1'>
      <Header />
      <TopQuizzesNavigationBar />
    </View>
  );
}
