import { BASE_API_URL } from '@/constants/Urls';
import axios from 'axios';
import { useState } from 'react';

interface QuizInfoData {
  id: number;
  title: string;
  description: string;
}

export function useQuizInfo() {
  const [loadingQuizInfo, setLoadingQuizInfo] = useState<boolean>(true);
  const [errorQuizInfoMsg, setErrorQuizInfoMsg] = useState<string | null>(null);
  const [quizInfo, setQuizInfo] = useState<QuizInfoData | null>();

  async function getQuizInfo(id: number) {
    try {
      const response = await axios.get(`${BASE_API_URL}/quiz/`, {
        params: { id: id },
      });
      if (response.status === 200) {
        setQuizInfo(response.data);
      } else {
        setErrorQuizInfoMsg('Failed to get quiz info');
      }
    } catch (err: any) {
      setErrorQuizInfoMsg('Failed to get quiz info');
    } finally {
      setLoadingQuizInfo(false);
    }
  };

  return { getQuizInfo, loadingQuizInfo, errorQuizInfoMsg, quizInfo };
}
