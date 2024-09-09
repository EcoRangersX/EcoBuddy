import { BASE_API_URL } from '@/constants/Urls';
import axios from 'axios';
import { useState } from 'react';
import { StartQuizProps } from '@/types/quizzes';
import { globalLogger } from '@/utils/logger';

interface QuizzesData {
  'quiz-preview': StartQuizProps[];
}

export function useQuizzes() {
  const [loadingQuizzes, setLoadingQuizzes] = useState<boolean>(false);
  const [quizzesErrorMsg, setQuizzesErrorMsg] = useState<string | null>(null);
  const [quizzes, setQuizzes] = useState<QuizzesData | null>(null);

  async function getQuizzes(amountOfQuestions: number) {
    try {
      const response = await axios.get(`${BASE_API_URL}/api/quiz/preview`, {
        params: { amount: amountOfQuestions },
      });
      if (response.status === 200) {
        setQuizzes(response.data);
      } else {
        setQuizzesErrorMsg('Failed to load quizzes');
        globalLogger.warn('Failed to load quizzes');
      }
    } catch (err: any) {
      setQuizzesErrorMsg('Failed to load quizzes');
      globalLogger.error(`The error occurred while loading quizzes: ${err.message}`);
      
    } finally {
      setLoadingQuizzes(false);
    }
  }

  return { getQuizzes, quizzes, quizzesErrorMsg, loadingQuizzes };
}
