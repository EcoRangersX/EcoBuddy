import axios from 'axios';
import { useState } from 'react';
import { BASE_API_URL } from '@/constants/Urls';

interface AIResponse {
  response: string;
}

export function useWeatherData() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<AIResponse | null>(null);

  async function getWeatherData() {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await axios.get(`${BASE_API_URL}/api/weather-data`);
      setWeatherData(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { getWeatherData, weatherData, loading, error };
}
