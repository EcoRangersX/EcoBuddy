import axios from 'axios';
import { useState } from 'react';
import { BASE_API_URL } from '@/constants/Urls';
import { globalLogger } from '@/utils/logger';

interface WeatherDataResponse {
  'weather-data': { value: number; 'weather-element': string; unit: string }[];
}

interface WeatherData {
  lat: number;
  lon: number;
}

/**
 * Custom hook for fetching weather data.
 *
 * @returns An object containing the following properties:
 *   - `getWeatherData`: A function that fetches weather data based on latitude and longitude.
 *   - `weatherData`: The fetched weather data.
 *   - `loadingWeatherData`: A boolean indicating whether the weather data is currently being loaded.
 *   - `errorWeatherData`: An error message if there was an error fetching the weather data.
 */
export function useWeatherData() {
  const [loadingWeatherData, setLoadingWeatherData] = useState<boolean>(false);
  const [errorWeatherDataMsg, setErrorWeatherDataMsg] = useState<string | null>(
    null,
  );
  const [weatherData, setWeatherData] = useState<WeatherDataResponse | null>(
    null,
  );

  async function getWeatherData({ lat, lon }: WeatherData) {
    setLoadingWeatherData(true);
    setErrorWeatherDataMsg(null);
    setWeatherData(null);
    globalLogger.info(`The Base API URL is: ${BASE_API_URL}`);

    try {
      const response = await axios.get(`${BASE_API_URL}/api/air_data/weather`, {
        params: { latitude: lat, longitude: lon },
      });
      if (response.status === 200) {
        setWeatherData(response.data);
      } else {
        setErrorWeatherDataMsg('Failed to fetch weather data');
        globalLogger.warn('Failed to fetch weather data');
      }
    } catch (err: any) {
      globalLogger.error(
        `Error occurred while fetching weather data: ${err.message}`,
      );
      setErrorWeatherDataMsg('Failed to fetch weather data');
    } finally {
      setLoadingWeatherData(false);
    }
  }

  return {
    getWeatherData,
    weatherData,
    loadingWeatherData,
    errorWeatherDataMsg,
  };
}
