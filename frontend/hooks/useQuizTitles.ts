import axios from 'axios';
import { BASE_API_URL } from '@/constants/Urls';
import { useState } from 'react';
import { QuizTitles } from '@/types/home';

export function useQuizTitles() {
  const [loadingQuizTitles, setLoadingQuizTitles] = useState<boolean>(false);
  const [errorQuizTitleMsg, setErrorQuizTitleMsg] = useState<string | null>(
    null,
  );
  const [quizTitles, setQuizTitles] = useState<QuizTitles | null>();

  const getQuizTitles = async (number_of_titles: number) => {
    setLoadingQuizTitles(true);
    setErrorQuizTitleMsg(null);
    setQuizTitles(null);

    try {
      const response = await axios.get(
        `${BASE_API_URL}/api/quizes/quiz_titles`,
        { params: { amount: number_of_titles } },
      );
      if (response.status === 200) {
        setQuizTitles(response.data);
      } else {
        throw new Error('Error fetching quiz title');
      }
    } catch (error: any) {
      setErrorQuizTitleMsg(error);
    } finally {
      setLoadingQuizTitles(false);
    }
  };

  return { getQuizTitles, quizTitles, loadingQuizTitles, errorQuizTitleMsg };
}
