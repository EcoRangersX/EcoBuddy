import { ScrollView, View, Text } from 'react-native';
import AQIComponent from '@/components/Home/AQIComponent';
import Header from '@/components/Header';
import WeatherDataSlider from '@/components/Home/WeatherDataSlider';
import ChemicalElementsSlider from '@/components/Home/ChemicalElementsSlider';
import EducationSection from '@/components/Home/EducationSection';
import {
  aiQuestions,
  quizTitles,
  articleTitles,
} from '@/constants/EducationArrays';

export default function HomeScreen() {
  return (
    <ScrollView>
      <Header />
      {/* AQI Component */}
      <View className="mt-5 items-center">
        <AQIComponent />
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
    </ScrollView>
  );
}
