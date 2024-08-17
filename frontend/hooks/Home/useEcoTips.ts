import axios from 'axios';
import { BASE_API_URL } from '@/constants/Urls';
import { useState } from 'react';
import { EcoTips } from '@/types/home';

export function useEcoTips() {
  const [loadingEcoTips, setLoadingEcoTips] = useState<boolean>(false);
  const [errorEcoTipsMsg, setErrorEcoTipsMsg] = useState<string | null>(null);
  const [ecoTips, setEcoTips] = useState<EcoTips | null>();

  const getEcoTips = async (number_of_tips: number) => {
    setLoadingEcoTips(true);
    setErrorEcoTipsMsg(null);
    setEcoTips(null);

    try {
      const response = await axios.get(`${BASE_API_URL}/api/eco_tips/get_eco_tips`, {
        params: { amount: number_of_tips },
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
