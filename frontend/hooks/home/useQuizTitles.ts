import axios from 'axios';
import { BASE_API_URL } from '@/constants/Urls';
import { useState } from 'react';

interface QuizTitlesResponse {
  "quiz-titles": string[];
}

/**
 * Custom hook for fetching quiz titles.
 *
 * @returns An object containing the following properties:
 *   - `getQuizTitles`: A function that fetches quiz titles from the API.
 *   - `quizTitles`: An array of quiz titles.
 *   - `loadingQuizTitles`: A boolean indicating whether quiz titles are being loaded.
 *   - `errorQuizTitleMsg`: A string containing an error message if there was an error fetching quiz titles.
 */
export function useQuizTitles() {
  const [loadingQuizTitles, setLoadingQuizTitles] = useState<boolean>(false);
  const [errorQuizTitleMsg, setErrorQuizTitleMsg] = useState<string | null>(
    null,
  );
  const [quizTitles, setQuizTitles] = useState<QuizTitlesResponse | null>();

  const getQuizTitles = async (amount: number) => {
    setLoadingQuizTitles(true);
    setErrorQuizTitleMsg(null);
    setQuizTitles(null);

    try {
      const response = await axios.get(
        `${BASE_API_URL}/api/quiz/title`,
        { params: { amount: amount } },
      );
      if (response.status === 200) {
        setQuizTitles(response.data);
      } else {
        throw new Error('Error fetching quiz title');
      }
    } catch (err: any) {
      console.error(`Error fetching quiz titles: ${err}`);
      setErrorQuizTitleMsg(`An error occurred while fetching quiz titles.`);
    } finally {
      setLoadingQuizTitles(false);
    }
  };

  return { getQuizTitles, quizTitles, loadingQuizTitles, errorQuizTitleMsg };
}
