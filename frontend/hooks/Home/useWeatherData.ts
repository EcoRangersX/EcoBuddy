import axios from 'axios';
import { useState } from 'react';
import { BASE_API_URL } from '@/constants/Urls';

interface WeatherDataResponse {
  response: string;
}

interface WeatherData {
  lat: number;
  lon: number;
}

export function useWeatherData() {
  const [loadingWeatherData, setLoadingWeatherData] = useState<boolean>(false);
  const [errorWeatherData, setErrorWeatherData] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherDataResponse | null>(
    null,
  );

  async function getWeatherData({ lat, lon }: WeatherData) {
    setLoadingWeatherData(true);
    setErrorWeatherData(null);
    setWeatherData(null);

    try {
      const response = await axios.get(`${BASE_API_URL}/api/air/weather`, {
        params: { latitude: lat, longitude: lon },
      });
      if (response.status === 200) {
        setWeatherData(response.data);
      } else {
        setErrorWeatherData('Failed to fetch weather data');
      }
    } catch (err: any) {
      console.log(`Error fetching weather data: ${err.message}`)
      setErrorWeatherData(err.message);
    } finally {
      setLoadingWeatherData(false);
    }
  }

  return { getWeatherData, weatherData, loadingWeatherData, errorWeatherData };
}
