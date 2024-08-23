import axios from 'axios';
import { useState } from 'react';
import { BASE_API_URL } from '@/constants/Urls';
import { AqiData } from '@/types/home';

interface AqiDataProps {
  lon: number;
  lat: number;
}

/**
 * Custom hook for fetching AQI (Air Quality Index) data.
 *
 * @returns An object containing the following properties:
 *   - `getAqiData`: A function that fetches AQI data based on the provided longitude and latitude.
 *   - `airQualityData`: The fetched AQI data.
 *   - `loadingAqi`: A boolean indicating whether the AQI data is currently being fetched.
 *   - `errorAqiMsg`: An optional string containing an error message if the fetching process fails.
 */
export function useAqiData() {
  const [loadingAqi, setLoadingAqi] = useState<boolean>(false);
  const [errorAqiMsg, setErrorAqiMsg] = useState<string | null>(null);
  const [airQualityData, setAirQualityData] = useState<AqiData | null>(
    null,
  );

  async function getAqiData({ lon, lat }: AqiDataProps) {
    setLoadingAqi(true);
    setErrorAqiMsg(null);
    setAirQualityData(null);

    try {
      const response = await axios.get(`${BASE_API_URL}/api/air/air_quality`, {
        params: { longitude: lon, latitude: lat },
      });
      if (response.status === 200) {
        setAirQualityData(response.data['air-quality-data']);
      } else {
        throw new Error('Error fetching air quality data');
      }
    } catch (err: any) {
      console.log(`Error fetching Aqi Data: ${err}`)
      setErrorAqiMsg(err.message);
    } finally {
      setLoadingAqi(false);
    }
  }

  return { getAqiData, airQualityData, loadingAqi, errorAqiMsg };
}
