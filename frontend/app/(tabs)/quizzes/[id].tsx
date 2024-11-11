import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import QuizIntroduction from '@/components/quiz/QuizIntroduction';
import Header from '@/components/Header';
import QuizCard from '@/components/quiz/QuizCard';
import { UIActivityIndicator } from 'react-native-indicators';
import { useQuizInfo } from '@/hooks/quizzes/useQuizInfo';

export default function QuizScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const { id } = useLocalSearchParams();
  const { getQuizInfo, loadingQuizInfo, errorQuizInfoMsg, quizInfo } =
    useQuizInfo();

  const handleOnClose = () => {
    setIsVisible(false);
  };

  // Hook to fetch quiz info
  useEffect(() => {
    const fetchQuizInfo = async () => {
      await getQuizInfo(Number(id));
    };

    if (id) {
      fetchQuizInfo();
    } else {
      console.log('No quiz id found');
    }
  }, [id]);

  return (
    <View className="flex-1">
      <Header />
      <QuizIntroduction isVisible={isVisible} onClose={handleOnClose} />
      {!loadingQuizInfo && quizInfo && (
        <QuizCard
          quiz_id={Number(id)}
          totalQuestions={quizInfo?.quiz.length}
          questions={quizInfo?.quiz}
        />
      )}
      {loadingQuizInfo && <UIActivityIndicator size={80} color={'#50cc6e'} />}
      {errorQuizInfoMsg && (
        <Text>
          We are sorry but we are experiencing issues right now. Return soon and
          it will be fixed. Have a wonderful day!
        </Text>
      )}
    </View>
  );
}
