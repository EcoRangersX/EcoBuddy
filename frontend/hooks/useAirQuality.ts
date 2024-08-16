import axios from 'axios';
import { useState } from 'react';
import { BASE_API_URL } from '@/constants/Urls';

interface ConcentrationOfElements {
  co: number;
  nh3: number;
  no: number;
  no2: number;
  o3: number;
  pm10: number;
  pm2_5: number;
  so2: number;
}

interface AirQualityData {
  AQI: string;
  City: string;
  Concentration_of_elements: ConcentrationOfElements;
}


interface AirQualityProps {
  lon: number;
  lat: number;
}

export function useAirQuality() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [airQualityData, setAirQualityData] =
    useState<AirQualityData | null>(null);

  async function getAirQuality({ lon, lat }: AirQualityProps) {
    setLoading(true);
    setError(null);
    setAirQualityData(null);

    try {
      const response = await axios.get(`${BASE_API_URL}/api/air/air_quality`, {
        params: { Longitude: lon, Latitude: lat },
      });
      if (response.status === 200) {
        setAirQualityData(response.data.Air_quality_data);
      } else {
        throw new Error('Error fetching air quality data');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { getAirQuality, airQualityData, loading, error };
}
