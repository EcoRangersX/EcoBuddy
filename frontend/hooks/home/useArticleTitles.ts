import axios from 'axios';
import { BASE_API_URL } from '@/constants/Urls';
import { useState } from 'react';
import { ArticleTitles } from '@/types/home';
import { globalLogger } from '@/utils/logger';

/**
 * Custom hook for fetching article titles.
 *
 * @returns An object containing the following properties:
 *   - `getArticleTitles`: A function that fetches article titles from the API.
 *   - `articleTitles`: The fetched article titles.
 *   - `loadingArticleTitles`: A boolean indicating if article titles are currently being loaded.
 *   - `errorArticleTitleMsg`: An error message if there was an error fetching article titles.
 */
export function useArticleTitles() {
  const [loadingArticleTitles, setLoadingArticleTitles] =
    useState<boolean>(false);
  const [errorArticleTitleMsg, setErrorArticleTitleMsg] = useState<
    string | null
  >(null);
  const [articleTitles, setArticleTitles] = useState<ArticleTitles | null>();

  const getArticleTitles = async (number_of_titles: number) => {
    setLoadingArticleTitles(true);
    setErrorArticleTitleMsg(null);
    setArticleTitles(null);

    try {
      const response = await axios.get(`${BASE_API_URL}/api/article_titles`, {
        params: { amount: number_of_titles },
      });
      if (response.status === 200) {
        setArticleTitles(response.data);
      } else {
        setErrorArticleTitleMsg('Failed to fetch article titles');
        globalLogger.warn('Failed to fetch article titles');
      }
    } catch (err: any) {
      globalLogger.error(`Error occurred while fetching article titles: ${err}`);
      setErrorArticleTitleMsg('Failed to fetch article titles');
    } finally {
      setLoadingArticleTitles(false);
    }
  };

  return {
    getArticleTitles,
    articleTitles,
    loadingArticleTitles,
    errorArticleTitleMsg,
  };
}
