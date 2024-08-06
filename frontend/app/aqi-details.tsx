import { ScrollView, Text, View } from 'react-native';
import Header from '@/components/Header';
import AqiDisplay from '@/components/Aqi-Details/AqiDisplay';
import AqiInfoBox from '@/components/Aqi-Details/AqiInfoBox';
import AqiExplanationSection from '@/components/Aqi-Details/AqiExplanationSection';
import AqiLevelList from '@/components/Aqi-Details/AqiLevelList';

export default function AQIDetails() {
  return (
    <ScrollView>
      <Header />
      <View className="p-3">
        <Text className="text-xl">Air Quality Index</Text>
        <AqiDisplay aqi={14} lastUpdate={14.42} />
        <View className="mt-5">
          <AqiInfoBox info="Moderate air quality. People with respiratory or heart conditions may be affected." />
        </View>
        <AqiExplanationSection />
        <View className="mt-2">
          <AqiLevelList />
        </View>
      </View>
    </ScrollView>
  );
}
