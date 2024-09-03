import { ScrollView, View, Text } from 'react-native';
import AQIComponent from '@/components/homeee/AQIComponent';
import Header from '@/components/Header';
import WeatherDataSlider from '@/components/homeee/WeatherDataSlider';
import ChemicalElementsSlider from '@/components/homeee/ChemicalElementsSlider';
import EducationSection from '@/components/homeee/EducationSection';
import EcoTipList from '@/components/homeee/EcoTipList';
import { useAqiData } from '@/hooks/home/useAqiData';
import { useAiExampleQuestions } from '@/hooks/home/useAiExampleQuestions';
import { useQuizTitles } from '@/hooks/home/useQuizTitles';
import { useEcoTips } from '@/hooks/home/useEcoTips';
import { useArticleTitles } from '@/hooks/home/useArticleTitles';
import { useWeatherData } from '@/hooks/home/useWeatherData';
import { useEffect, useState } from 'react';
import Location from 'expo-location';
import EnableCurrentLocation from '@/components/EnableCurrentLocation';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [locationErrorMsg, setLocationErrorMsg] = useState<string | null>(null);
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

  // TODO: Implement AsyncStorage for storing and loading data
  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       await AsyncStorage.getItem('appData');
  //     } catch (error) {
  //       console.error('Failed to load location from AsyncStorage', error);
  //     }
  //   };

  //   loadData();
  //   console.log(`The loaded data is: ${loadData}`);
  // }, []);

  // useEffect(() => {
  //   const saveData = async () => {
  //     try {
  //       const dataToStore = {
  //         location,
  //         AiExampleQuestions,
  //         quizTitles,
  //         ecoTips,
  //         articleTitles,
  //         weatherData,
  //         airQualityData,
  //       };
  //       await AsyncStorage.setItem('appData', JSON.stringify(dataToStore));
  //     } catch (error) {
  //       console.error('Failed to save location to AsyncStorage', error);
  //     }
  //   };

  //   saveData();
  // }, [location]);

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
            setLocationErrorMsg(error.message);
          } else {
            setLocationErrorMsg(
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

    const fetchQuizTitles = async () => {
      await getQuizTitles(5);
    };

    const fetchArticleTitles = async () => {
      await getArticleTitles(5);
    }

    const fetchEcoTips = async () => {
      await getEcoTips(5);
    }

    fetchAiExampleQuestions();
    fetchQuizTitles();
    fetchArticleTitles();
    fetchEcoTips();
  }, []);

  return (
    <ScrollView>
      <Header />
      <View className="p-3">
        <EnableCurrentLocation
          setLocation={setLocation}
          setLocationErrorMsg={setLocationErrorMsg}
        />
      </View>
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
          weatherData={weatherData?.['weather-data'] || null}
          loading={loadingWeatherData}
          error={errorWeatherDataMsg}
        />
      </View>
      {/* Air pollution signals Section */}
      <ChemicalElementsSlider
        chemicalElementList={
          airQualityData?.['concentration-of-elements'] || null
        }
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
