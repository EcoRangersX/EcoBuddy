import { ScrollView, View, Text, Platform } from 'react-native';
import AQIComponent from '@/components/Home/AQIComponent';
import Header from '@/components/Header';
import WeatherDataSlider from '@/components/Home/WeatherDataSlider';
import ChemicalElementsSlider from '@/components/Home/ChemicalElementsSlider';
import EducationSection from '@/components/Home/EducationSection';
import {
  aiQuestions,
  quizTitles,
  articleTitles,
  ecoTips,
} from '@/constants/EducationArrays';
import EcoTipList from '@/components/Home/EcoTipList';
import { useAirQuality } from '@/hooks/useAirQuality';
import { useState, useEffect } from 'react';
import * as Device from 'expo-device';
import * as Location from 'expo-location';

export default function HomeScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { getAirQuality, airQualityData, loading, error } = useAirQuality();

  useEffect(() => {
    (async () => {
      try {
        if (Platform.OS === 'android' && !Device.isDevice) {
          setErrorMsg(
            'Oops, this will not work on an Android Emulator. Try it on your device!',
          );
          return;
        }

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== Location.PermissionStatus.GRANTED) {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMsg(error.message);
        } else {
          setErrorMsg('An unexpected error occurred');
        }
      }
    })();
  }, []);

  useEffect(() => {
    const fetchAirQualityData = async () => {
      if (location) {
        try {
          await getAirQuality({
            lon: location.coords.longitude,
            lat: location.coords.latitude,
          });
        } catch (error) {
          if (error instanceof Error) {
            setErrorMsg(error.message);
          } else {
            setErrorMsg('An unexpected error occurred while fetching air quality data');
          }
        }
      }
    };

    fetchAirQualityData();
  }, [location]);

  return (
    <ScrollView>
      <Header />
      {/* AQI Component */}
      <View className="mt-5 items-center">
        <AQIComponent
          value={36}
          status={airQualityData?.AQI || "good"}
          city={airQualityData?.City || "Warsaw"}
          loading={loading}
          error={error}
        />
      </View>
      {/* Weather Data Section */}
      <View className="mt-5 p-5">
        <WeatherDataSlider />
      </View>
      {/* Air pollution signals Section */}
      <ChemicalElementsSlider />
      {/* Education Section */}
      <View>
        <Text className="text-left text-xl ml-5 font-bold">Education</Text>
        <View className="flex flex-col gap-5">
          <EducationSection
            title="Quiz"
            items={quizTitles}
            titleSectionColor="#57d272"
          />
          <EducationSection
            title="Ai Questions"
            items={aiQuestions}
            elementBgColor="#d2f5fb"
            titleSectionColor="#49b6c8"
            bgColor="#c1f1fa"
          />
          <EducationSection
            title="Articles"
            items={articleTitles}
            titleSectionColor="#57d272"
          />
        </View>
      </View>
      {/* Eco Tips of the day Section */}
      <View>
        <Text className="text-left text-xl ml-5 font-bold">
          Eco tips of the day
        </Text>
        <EcoTipList ecoTips={ecoTips} />
      </View>
    </ScrollView>
  );
}
