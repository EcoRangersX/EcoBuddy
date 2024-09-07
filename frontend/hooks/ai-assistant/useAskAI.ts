import axios from 'axios';
import { useState } from 'react';
import { BASE_API_URL } from '@/constants/Urls';
import { globalLogger } from '@/utils/logger';

interface AIResponse {
  response: string;
}

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
