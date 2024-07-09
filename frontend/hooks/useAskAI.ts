import { useState } from 'react';
import axios from 'axios';

interface AIResponse {
  response: string;
}

export function useAskAI() {
  const BASE_API_URL = process.env.EXPO_PUBLIC_BASE_API_URL

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [aiResponse, setAIResponse] = useState<AIResponse | null>(null);

  async function askAI(prompt: string) {
    setLoading(true);
    setError(null);
    setAIResponse(null);

    try {
      const response = await axios.post(`${BASE_API_URL}/api/ai_assistant`, { "userPrompt": prompt });
      setAIResponse(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { askAI, aiResponse, loading, error };
}
