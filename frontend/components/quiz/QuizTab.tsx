import { ScrollView, Text, View } from 'react-native';
import { useEffect } from 'react';
import TestKnowledgeSection from '@/components/quizzes/TestKnowledgeSection';
import QuizOfTheDaySection from '@/components/quizzes/QuizOfTheDaySection';
import { useQuizzes } from '@/hooks/quizzes/useQuizzes';
import { useFeaturedQuiz } from '@/hooks/quizzes/useFeaturedQuiz';

export default function QuizTab() {
  const { getQuizzes, quizzes, loadingQuizzes, quizzesErrorMsg } = useQuizzes();
  const {
    getFeaturedQuiz,
    featuredQuiz,
    loadingFeaturedQuiz,
    featuredFeaturedErrorMsg,
  } = useFeaturedQuiz();

  useEffect(() => {
    getQuizzes(5);
    getFeaturedQuiz();
  }, []); // Fetch quizzes and featured quiz data

  return (
    <ScrollView>
      <TestKnowledgeSection
        quizzes={quizzes?.['quiz-preview']}
        loading={loadingQuizzes}
        error={quizzesErrorMsg}
      />
      <View className="mt-5">
        {loadingFeaturedQuiz ? (
          <View>
            <Text>Loading...</Text>
          </View>
        ) : featuredFeaturedErrorMsg ? (
          <View>
            <Text>{featuredFeaturedErrorMsg} Contact Support Team</Text>
          </View>
        ) : featuredQuiz ? (
          <QuizOfTheDaySection
            id={featuredQuiz.id}
            level={featuredQuiz.level}
            title={featuredQuiz.title}
            description={featuredQuiz.description}
            amount-of-questions={featuredQuiz['amount-of-questions']}
          />
        ) : (
          <View>
            <Text>No featured quiz available</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
