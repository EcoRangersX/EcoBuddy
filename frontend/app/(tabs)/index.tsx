import { ScrollView, View, Text, Platform } from 'react-native';
import AQIComponent from '@/components/home/AQIComponent';
import Header from '@/components/Header';
import WeatherDataSlider from '@/components/home/WeatherDataSlider';
import ChemicalElementsSlider from '@/components/home/ChemicalElementsSlider';
import EducationSection from '@/components/home/EducationSection';
import {
  articleTitles,
  ecoTipsStatic,
} from '@/constants/EducationArrays';
import EcoTipList from '@/components/home/EcoTipList';
import { useAqiData } from '@/hooks/home/useAqiData';
import { useAiExampleQuestions } from '@/hooks/home/useAiExampleQuestions';
import { useQuizTitles } from '@/hooks/home/useQuizTitles';
import { useEcoTips } from '@/hooks/home/useEcoTips';
import { useState, useEffect } from 'react';
import * as Device from 'expo-device';
import * as Location from 'expo-location';

export default function HomeScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { getAqiData, airQualityData, loadingAqi, errorAqiMsg } = useAqiData();
  const {
    getAiExampleQuestions,
    AiExampleQuestions,
    loadingAiExampleQuestions,
    errorAiExampleQuestionsMsg,
  } = useAiExampleQuestions();
  const { getQuizTitles, quizTitles, loadingQuizTitles, errorQuizTitleMsg  } = useQuizTitles();
  const { getEcoTips, ecoTips, loadingEcoTips, errorEcoTipsMsg } = useEcoTips();

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
    const fetchAqiData = async () => {
      if (location) {
        try {
          await getAqiData({
            lon: location.coords.longitude,
            lat: location.coords.latitude,
          });
        } catch (error) {
          if (error instanceof Error) {
            setErrorMsg(error.message);
          } else {
            setErrorMsg('An unexpected error occurred while fetching Aqi data');
          }
        }
      }
    };

    fetchAqiData();
  }, [location]);

  useEffect(() => {
    const fetchAiExampleQuestions = async () => {
      try {
        await getAiExampleQuestions(5);
      } catch (error: any) {
        if (error instanceof Error) {
          setErrorMsg(error.message);
        } else {
          setErrorMsg(
            'An unexpected error occurred while fetching AI example questions',
          );
        }
      }
    };

    fetchAiExampleQuestions();
  }, []);

  useEffect(() => {
    const fetchQuizTitles = async () => {
      try {
        await getQuizTitles(5);
      } catch (error: any) {
        if (error instanceof Error) {
          setErrorMsg(error.message);
        } else {
          setErrorMsg('An unexpected error occurred while fetching quiz titles');
        }
      }
    };

    fetchQuizTitles();
  }, []);

  useEffect(() => {
    const fetchEcoTips = async () => {
      try {
        await getEcoTips(5);
      } catch (error: any) {
        if (error instanceof Error) {
          setErrorMsg(error.message);
        } else {
          setErrorMsg('An unexpected error occurred while fetching eco tips');
        }
      }
    };

    fetchEcoTips();
  }, []);

  return (
    <ScrollView>
      <Header />
      {/* AQI Component */}
      <View className="mt-5 items-center">
        <AQIComponent
          value={36}
          status={airQualityData?.aqi || 'good'}
          city={airQualityData?.city || 'Warsaw'}
          loading={loadingAqi}
          error={errorAqiMsg}
        />
      </View>
      {/* Weather Data Section */}
      <View className="mt-5 p-5">
        <WeatherDataSlider />
      </View>
      {/* Air pollution signals Section */}
      <ChemicalElementsSlider
        chemicalElementList={
          airQualityData?.['concentration-of-elements'] || undefined
        }
      />
      {/* Education Section */}
      <View>
        <Text className="text-left text-xl ml-5 font-bold">Education</Text>
        <View className="flex flex-col gap-5">
          <EducationSection
            title="Quiz"
            items={quizTitles?.['quiz-titles'] || []}
            titleSectionColor="#57d272"
            loading={loadingQuizTitles}
            error={errorQuizTitleMsg || ''}
          />
          <EducationSection
            title="Ai Questions"
            items={AiExampleQuestions?.questions || []}
            elementBgColor="#d2f5fb"
            titleSectionColor="#49b6c8"
            bgColor="#c1f1fa"
            loading={loadingAiExampleQuestions}
            error={errorAiExampleQuestionsMsg || ''}
          />
          <EducationSection
            title="Articles"
            items={articleTitles}
            titleSectionColor="#57d272"
            loading={false}
            error=""
          />
        </View>
      </View>
      {/* Eco Tips of the day Section */}
      <View>
        <Text className="text-left text-xl ml-5 font-bold">
          Eco tips of the day
        </Text>
        <EcoTipList ecoTips={ecoTipsStatic} />
      </View>
    </ScrollView>
  );
}
