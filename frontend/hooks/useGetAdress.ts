import { useState } from 'react';
import axios from 'axios';

const OPENCAGE_API_KEY = process.env.EXPO_PUBLIC_OPENCAGE_API_KEY;

interface Location {
  lat: number;
  lng: number;
}

interface GeocodeResult {
  formatted: string;
}

export default function useGeocode() {
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const BASE_API_URL = 'https://api.opencagedata.com/geocode/v1/json';

  const getGeocode = async (location: Location) => {
    const { lat, lng } = location;
    const url = `${BASE_API_URL}}?q=${lat}+${lng}&key=${OPENCAGE_API_KEY}`;

    try {
      const response = await axios.get(url);
      console.log(`Response from OpenCage: ${response}`)
      if (response.data.status.code === 200 && response.data.results.length > 0) {
        const result: GeocodeResult = response.data.results[0];
        setAddress(result.formatted);
      } else {
        setError('Unable to fetch address');
      }
    } catch (err) {
      setError('Error fetching data');
    }
  };

  return { address, error, getGeocode };
}
