import { ScrollView, View, Text, Platform } from 'react-native';
import AQIComponent from '@/components/home/AQIComponent';
import Header from '@/components/Header';
import WeatherDataSlider from '@/components/home/WeatherDataSlider';
import ChemicalElementsSlider from '@/components/home/ChemicalElementsSlider';
import EducationSection from '@/components/home/EducationSection';
import EcoTipList from '@/components/home/EcoTipList';
import { useAqiData } from '@/hooks/home/useAqiData';
import { useAiExampleQuestions } from '@/hooks/home/useAiExampleQuestions';
import { useQuizTitles } from '@/hooks/home/useQuizTitles';
import { useEcoTips } from '@/hooks/home/useEcoTips';
import { useArticleTitles } from '@/hooks/home/useArticleTitles';
import { useWeatherData } from '@/hooks/home/useWeatherData';
import { useState, useEffect } from 'react';
import * as Device from 'expo-device';
import * as Location from 'expo-location';

export default function HomeScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [locationErrorMsg, locationSetErrorMsg] = useState<string | null>(null);
  const { getAqiData, airQualityData, loadingAqi, errorAqiMsg } = useAqiData();
  const {
    getAiExampleQuestions,
    AiExampleQuestions,
    loadingAiExampleQuestions,
    errorAiExampleQuestionsMsg,
  } = useAiExampleQuestions();
  const { getQuizTitles, quizTitles, loadingQuizTitles, errorQuizTitleMsg } =
    useQuizTitles();
  const { getEcoTips, ecoTips, loadingEcoTips, errorEcoTipsMsg } = useEcoTips();
  const {
    getWeatherData,
    weatherData,
    loadingWeatherData,
    errorWeatherDataMsg,
  } = useWeatherData();
  const {
    getArticleTitles,
    articleTitles,
    loadingArticleTitles,
    errorArticleTitleMsg,
  } = useArticleTitles();

  useEffect(() => {
    (async () => {
      try {
        if (Platform.OS === 'android' && !Device.isDevice) {
          locationSetErrorMsg(
            'Oops, this will not work on an Android Emulator. Try it on your device!',
          );
          return;
        }

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== Location.PermissionStatus.GRANTED) {
          locationSetErrorMsg('Permission to access location was denied');
          return;
        }

        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      } catch (error) {
        if (error instanceof Error) {
          locationSetErrorMsg(error.message);
        } else {
          locationSetErrorMsg('An unexpected error occurred');
        }
      }
    })();
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (location) {
        try {
          await Promise.all([
            getAqiData({
              lon: location.coords.longitude,
              lat: location.coords.latitude,
            }),
            getWeatherData({
              lon: location.coords.longitude,
              lat: location.coords.latitude,
            }),
          ]);
        } catch (error) {
          if (error instanceof Error) {
            locationSetErrorMsg(error.message);
          } else {
            locationSetErrorMsg(
              'An unexpected error occurred while fetching Aqi data',
            );
          }
        }
      }
    };

    fetchWeatherData();
  }, [location]);

  useEffect(() => {
    const fetchAiExampleQuestions = async () => {
        await getAiExampleQuestions(5);
    };

    fetchAiExampleQuestions();
  }, []);

  useEffect(() => {
    const fetchQuizTitles = async () => {
        await getQuizTitles(5);
    };

    fetchQuizTitles();
  }, []);

  useEffect(() => {
    const fetchEcoTips = async () => {
        await getEcoTips(5);
    };

    fetchEcoTips();
  }, []);

  return (
    <ScrollView>
      <Header />
      {/* AQI Component */}
      <View className="mt-5 items-center">
        <AQIComponent
          value={airQualityData?.aqi.value || 36}
          status={airQualityData?.aqi.status || 'good'}
          city={airQualityData?.city || 'Warsaw'}
          loading={loadingAqi}
          errorMsg={errorAqiMsg || ''}
        />
      </View>
      {/* Weather Data Section */}
      <View className="mt-5 p-5">
        <WeatherDataSlider
          weatherData={weatherData?.["weather-data"] || null}
          loading={loadingWeatherData}
          error={errorWeatherDataMsg}
        />
      </View>
      {/* Air pollution signals Section */}
      <ChemicalElementsSlider
        chemicalElementList={airQualityData?.['concentration-of-elements'] || null}
      />
      {/* Education Section */}
      <View>
        <Text className="text-left text-xl ml-5 font-bold">Education</Text>
        <View className="flex flex-col gap-5">
          <EducationSection
            title="Quiz"
            items={quizTitles?.['quiz-titles'] || null}
            titleSectionColor="#57d272"
            loading={loadingQuizTitles}
            errorMsg={errorQuizTitleMsg || ''}
          />
          <EducationSection
            title="Ai Questions"
            items={AiExampleQuestions?.questions || null}
            elementBgColor="#d2f5fb"
            titleSectionColor="#49b6c8"
            bgColor="#c1f1fa"
            loading={loadingAiExampleQuestions}
            errorMsg={errorAiExampleQuestionsMsg || ''}
          />
          {/* Display Article Titles only if articleTitles data is available */}
          <EducationSection
            title="Articles"
            items={articleTitles?.article_titles || null}
            titleSectionColor="#57d272"
            loading={loadingArticleTitles}
            errorMsg={errorArticleTitleMsg || ''}
          />
        </View>
      </View>
      {/* Eco Tips of the day Section */}
      <View>
        <Text className="text-left text-xl ml-5 font-bold">
          Eco tips of the day
        </Text>
        <EcoTipList
          ecoTips={ecoTips?.['eco-tips'] || null}
          loading={loadingEcoTips}
          errorMsg={errorEcoTipsMsg}
        />
      </View>
    </ScrollView>
  );
}
