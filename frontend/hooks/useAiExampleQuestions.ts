import axios from 'axios';
import { BASE_API_URL } from '@/constants/Urls';
import { useState } from 'react';
import { AiQuestions } from '@/types/home';

export function useAiExampleQuestions() {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [AiExampleQuestions, setAiExampleQuestions] =
    useState<AiQuestions | null>();

  const getAiExampleQuestions = async (number_of_questions: number) => {
    setLoading(true);
    setErrorMsg(null);
    setAiExampleQuestions(null);

    try {
      const response = await axios.get(
        `${BASE_API_URL}/api/ai/example_questions`,
        { params: { amount: number_of_questions } },
      );
      if (response.status === 200) {
        setAiExampleQuestions(response.data['questions']);
      } else {
        throw new Error('Error fetching AI example questions');
      }
    } catch (error: any) {
      setErrorMsg(error);
    } finally {
      setLoading(false);
    }
  };

  return { getAiExampleQuestions, AiExampleQuestions, loading, errorMsg };
}
