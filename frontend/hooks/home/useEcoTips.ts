import axios from 'axios';
import { BASE_API_URL } from '@/constants/Urls';
import { useState } from 'react';

interface EcoTipsResponse {
  'eco-tips': { description: string; title: string }[];
}

/**
 * Custom hook for fetching eco tips.
 *
 * @returns An object containing the following properties:
 *   - `getEcoTips`: A function that fetches eco tips from the API.
 *   - `ecoTips`: The fetched eco tips.
 *   - `loadingEcoTips`: A boolean indicating whether the eco tips are currently being loaded.
 *   - `errorEcoTipsMsg`: An error message if there was an error fetching the eco tips.
 */
export function useEcoTips() {
  const [loadingEcoTips, setLoadingEcoTips] = useState<boolean>(false);
  const [errorEcoTipsMsg, setErrorEcoTipsMsg] = useState<string | null>(null);
  const [ecoTips, setEcoTips] = useState<EcoTipsResponse | null>();

  const getEcoTips = async (amount: number) => {
    setLoadingEcoTips(true);
    setErrorEcoTipsMsg(null);
    setEcoTips(null);

    try {
      const response = await axios.get(`${BASE_API_URL}/api/eco_tips`, {
        params: { amount: amount },
      });
      if (response.status === 200) {
        setEcoTips(response.data);
      } else {
        throw new Error('Error fetching eco tips');
      }
    } catch (err: any) {
      console.error(`Error fetching eco tips: ${err.message}`);
      setErrorEcoTipsMsg(err);
    } finally {
      setLoadingEcoTips(false);
    }
  };

  return { getEcoTips, ecoTips, loadingEcoTips, errorEcoTipsMsg };
}
