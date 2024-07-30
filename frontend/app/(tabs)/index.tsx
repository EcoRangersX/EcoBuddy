import { ScrollView, View } from 'react-native';
import AQIComponent from '@/components/Home/AQIComponent';
import Header from '@/components/Header';
import WeatherDataSlider from '@/components/Home/WeatherDataSlider';
import ChemicalElementsSlider from '@/components/Home/ChemicalElementsSlider';
import EducationSection from '@/components/Home/EducationSection';
import { aiQuestions, quizTitles } from '@/constants/EducationItems';

export default function HomeScreen() {
  return (
    <ScrollView>
      <Header />
      <View className="mt-5 items-center">
        <AQIComponent />
      </View>
      <View className="mt-5 p-5">
        <WeatherDataSlider />
      </View>
      <ChemicalElementsSlider />
      <View className="flex flex-col gap-5 mt-5 ">
        <EducationSection title='Quiz' items={quizTitles} />
        {/* <EducationSection title='Ai Questions' items={aiQuestions} /> */}
      </View>
    </ScrollView>
  );
}
