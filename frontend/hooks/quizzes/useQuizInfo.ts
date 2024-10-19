import { BASE_API_URL } from '@/constants/Urls';
import axios from 'axios';
import { useState } from 'react';
import { globalLogger } from '@/utils/logger';

export interface QuizQuestionProps {
  'correct-answer': number;
  options: { id: number; text: string }[];
  question: string;
}

interface QuizInfoData {
  quiz: QuizQuestionProps[];
}

export function useQuizInfo() {
  const [loadingQuizInfo, setLoadingQuizInfo] = useState<boolean>(true);
  const [errorQuizInfoMsg, setErrorQuizInfoMsg] = useState<string | null>(null);
  const [quizInfo, setQuizInfo] = useState<QuizInfoData | null>();

  const getQuizInfo = async (id: number) => {
    try {
      const response = await axios.get(`${BASE_API_URL}/api/quiz/`, {
        params: { id: id },
      });
      if (response.status === 200) {
        setQuizInfo(response.data);
      } else {
        setErrorQuizInfoMsg('Failed to get quiz info');
        globalLogger.warn('Failed to get quiz info');
      }
    } catch (err: any) {
      setErrorQuizInfoMsg('Failed to get quiz info');
      globalLogger.error(
        `Error occurred while fetching quiz info: ${err.message}`,
      );
    } finally {
      setLoadingQuizInfo(false);
    }
  };

  return { getQuizInfo, loadingQuizInfo, errorQuizInfoMsg, quizInfo };
}
