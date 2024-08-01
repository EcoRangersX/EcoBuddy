import { useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '@/constants/Urls';

interface AIResponse {
  response: string;
}

// Uncomment for Axios Logging purposes
// axios.interceptors.request.use(
//   function (config) {
//     console.log('Request made with ', config);
//     return config;
//   },
//   function (error) {
//     console.log('Error making request', error);
//     return Promise.reject(error);
//   },
// );

// Uncomment for Axios Logging purposes
// // Add a response interceptor
// axios.interceptors.response.use(
//   function (response) {
//     console.log('Response received', response);
//     return response;
//   },
//   function (error) {
//     console.log('Error in response', error);
//     return Promise.reject(error);
//   },
// );

export function useAskAI() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [aiResponse, setAIResponse] = useState<AIResponse | null>(null);

  async function askAI(prompt: string) {
    setLoading(true);
    setError(null);
    setAIResponse(null);

    try {
      const response = await axios.post(`${BASE_API_URL}/api/ai_assistant`, {
        userPrompt: prompt,
      });
      setAIResponse(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { askAI, aiResponse, loading, error };
}
