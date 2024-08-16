import axios from 'axios';
import { useState } from 'react';
import { BASE_API_URL } from '@/constants/Urls';


interface AirQualityResponse {
  response: {
    AQI: string;
    City: string;
    Concentration_of_elements: {
      chemical_name: string;
      value: number;
    };
  };
}

interface AirQualityProps {
  lon: number;
  lat: number;
}

export function useAirQuality() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [airQualityData, setAirQualityData] =
    useState<AirQualityResponse | null>(null);

  async function getAirQuality({ lon, lat }: AirQualityProps) {
    setLoading(true);
    setError(null);
    setAirQualityData(null);

    try {
      const response = await axios.get(`${BASE_API_URL}/api/air/air_quality`, {
        params: { Longitude: lon, Latitude: lat },
      });
      if (response.status === 200) {
        console.log(`The response of aiq quality is: ${JSON.stringify(response.data.airQualityData, null, 2)}`)
        setAirQualityData(response.data);
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
