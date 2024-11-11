import axios from 'axios';
import { BASE_API_URL } from '@/constants/Urls';
import { globalLogger } from '@/utils/logger';
import { useState } from 'react';
import { StartQuizProps } from '@/types/quizzes';

export function useFeaturedQuiz() {
  const [featuredQuiz, setFeaturedQuiz] = useState<StartQuizProps | null>(null);
  const [loadingFeaturedQuiz, setLoadingFeaturedQuiz] = useState<boolean>(true);
  const [featuredFeaturedErrorMsg, setFeaturedErrorMsg] = useState<
    string | null
  >("");

  async function getFeaturedQuiz() {
    try {
      const response = await axios.get(`${BASE_API_URL}/api/quiz/most-popular`);
      if (response.status === 200) {
        setFeaturedQuiz(response.data["most-popular-quiz"]);
      }
    } catch (err: any) {
      setFeaturedErrorMsg('Failed loading featured quiz');
      globalLogger.error('Error getting featured quiz');
    } finally {
      setLoadingFeaturedQuiz(false);
    }
  }

  return {
    featuredQuiz,
    getFeaturedQuiz,
    loadingFeaturedQuiz,
    featuredFeaturedErrorMsg,
  };
}
