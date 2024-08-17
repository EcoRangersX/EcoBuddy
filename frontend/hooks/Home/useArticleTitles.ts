import axios from "axios";
import { BASE_API_URL } from "@/constants/Urls";
import { useState } from "react";
import { ArticleTitles } from "@/types/home";

export function useArticleTitles() {
  const [loadingArticleTitles, setLoadingArticleTitles] = useState<boolean>(
    false
  );
  const [errorArticleTitleMsg, setErrorArticleTitleMsg] = useState<string | null>(
    null
  );
  const [articleTitles, setArticleTitles] = useState<ArticleTitles | null>();

  const getArticleTitles = async (number_of_titles: number) => {
    setLoadingArticleTitles(true);
    setErrorArticleTitleMsg(null);
    setArticleTitles(null);

    try {
      const response = await axios.get(
        `${BASE_API_URL}/api/article_titles`,
        { params: { amount: number_of_titles } }
      );
      if (response.status === 200) {
        setArticleTitles(response.data);
      } else {
        throw new Error("Error fetching article title");
      }
    } catch (err: any) {
      console.error(`Error fetching article titles: ${err}`);
      setErrorArticleTitleMsg(err);
    } finally {
      setLoadingArticleTitles(false);
    }
  };

  return { getArticleTitles, articleTitles, loadingArticleTitles, errorArticleTitleMsg };
}
