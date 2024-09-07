import axios from 'axios';
import { BASE_API_URL } from '@/constants/Urls';
import { useState } from 'react';
import { AiQuestions } from '@/types/home';
import { globalLogger } from '@/utils/logger';

/**
 * Custom hook for fetching AI example questions.
 *
 * @returns An object containing the following properties:
 *   - `getAiExampleQuestions`: A function that fetches AI example questions.
 *   - `AiExampleQuestions`: The fetched AI example questions.
 *   - `loadingAiExampleQuestions`: A boolean indicating if the AI example questions are currently being loaded.
 *   - `errorAiExampleQuestionsMsg`: An error message if there was an error fetching the AI example questions.
 */
export function useAiExampleQuestions() {
  const [loadingAiExampleQuestions, setLoadingAiExampleQuestions] =
    useState<boolean>(false);
  const [errorAiExampleQuestionsMsg, setErrorAiExampleQuestionsMsg] = useState<
    string | null
  >(null);
  const [AiExampleQuestions, setAiExampleQuestions] =
    useState<AiQuestions | null>();

  const getAiExampleQuestions = async (number_of_questions: number) => {
    setLoadingAiExampleQuestions(true);
    setErrorAiExampleQuestionsMsg(null);
    setAiExampleQuestions(null);

    try {
      const response = await axios.get(
        `${BASE_API_URL}/api/ai/example_questions`,
        { params: { amount: number_of_questions } },
      );
      if (response.status === 200) {
        setAiExampleQuestions(response.data);
      } else {
        setErrorAiExampleQuestionsMsg('Error fetching AI example questions');
        globalLogger.warn("Failed to fetch AI example questions")
      }
    } catch (err: any) {
      globalLogger.error(`Error occurred while fetching AI example questions: ${err.message}`);
      setErrorAiExampleQuestionsMsg(
        'Failed to fetch AI example questions',
      );
    } finally {
      setLoadingAiExampleQuestions(false);
    }
  };

  return {
    getAiExampleQuestions,
    AiExampleQuestions,
    loadingAiExampleQuestions,
    errorAiExampleQuestionsMsg,
  };
}
