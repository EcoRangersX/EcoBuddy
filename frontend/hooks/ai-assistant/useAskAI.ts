import axios from 'axios';
import { useState } from 'react';
import { BASE_API_URL } from '@/constants/Urls';
import { globalLogger } from '@/utils/logger';

interface AIResponse {
  response: string;
}

// Request Interceptor to log the request details
// axios.interceptors.request.use(
//   function (config) {
//     console.log('Making request to:', config.url);
//     console.log('Request method:', config.method);
//     console.log('Request headers:', config.headers);
//     console.log('Request data:', config.data);
//     return config;
//   },
//   function (error) {
//     console.log('Error occurred during request:', error);
//     return Promise.reject(error);
//   }
// );

// // Response Interceptor to log the response or error details
// axios.interceptors.response.use(
//   function (response) {
//     console.log('Response data:', response.data);
//     console.log('Response status:', response.status);
//     console.log('Response headers:', response.headers);
//     return response;
//   },
//   function (error) {
//     if (error.response) {
//       console.log('Error response data:', error.response.data);
//       console.log('Error response status:', error.response.status);
//       console.log('Error response headers:', error.response.headers);
//     } else if (error.request) {
//       console.log('No response received:', error.request);
//     } else {
//       console.log('Request error:', error.message);
//     }
//     return Promise.reject(error);
//   }
// );

/**
 * Custom hook for interacting with the AI assistant.
 *
 * @returns An object containing the following properties:
 *   - `askAI`: A function used to ask a question to the AI assistant.
 *   - `aiResponse`: The response received from the AI assistant.
 *   - `loadingAiOutput`: A boolean indicating whether the AI output is currently being loaded.
 *   - `errorAiOutput`: An optional string containing the error message, if any, encountered while fetching the AI output.
 */
export function useAskAI() {
  const [loadingAiResponse, setLoadingAiResponse] = useState<boolean>(false);
  const [errorAiResponseMsg, setErrorAiResponseMsg] = useState<string | null>(null);
  const [aiResponse, setAIResponse] = useState<AIResponse | null>(null);

  async function askAI(question: string) {
    setLoadingAiResponse(true);
    setErrorAiResponseMsg(null);
    setAIResponse(null);

    try {
      const response = await axios.get(`${BASE_API_URL}/api/ai/ai_assistant`, {
        params: {"user-input": question},
      });
      setAIResponse(response.data);
    } catch (err: any) {
      globalLogger.error(`Error occurred while fetching the AI output: ${err.message}`)
      setErrorAiResponseMsg("Failed to fetch AI response");
    } finally {
      setLoadingAiResponse(false);
    }
  }

  return { askAI, aiResponse, loadingAiResponse, errorAiResponseMsg };
}
