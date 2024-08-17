import axios from 'axios';
import { useState } from 'react';
import { BASE_API_URL } from '@/constants/Urls';
import { AqiData } from '@/types/home';

interface AqiDataProps {
  lon: number;
  lat: number;
}

export function useAqiData() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [airQualityData, setAirQualityData] = useState<AqiData | null>(
    null,
  );

  async function getAqiData({ lon, lat }: AqiDataProps) {
    setLoading(true);
    setError(null);
    setAirQualityData(null);

    try {
      const response = await axios.get(`${BASE_API_URL}/api/air/air_quality`, {
        params: { longitude: lon, latitude: lat },
      });
      if (response.status === 200) {
        console.log(`The AQI Data: ${JSON.stringify(response.data['air-quality-data'])}`)
        setAirQualityData(response.data['air-quality-data']);
      } else {
        throw new Error('Error fetching air quality data');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { getAqiData, airQualityData, loading, error };
}
