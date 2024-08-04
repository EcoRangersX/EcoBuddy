import { ScrollView, Text, View } from 'react-native';
import Header from '@/components/Header';
import AqiDisplay from '@/components/Aqi-Details/AqiDisplay';
import AqiInfoBox from '@/components/Aqi-Details/AqiInfoBox';
import AqiExplanationSection from '@/components/Aqi-Details/AqiExplanationSection';

export default function AQIDetails() {
  return (
    <ScrollView>
      <Header />
      <View className="p-3">
        <Text className="text-xl">Air Quality Index</Text>
        <View className='mt-3'>
          <AqiDisplay aqi={100} />
          <AqiInfoBox info="Moderate air quality. People with respiratory or heart conditions may be affected." />
        </View>
        <AqiExplanationSection />
      </View>
    </ScrollView>
  );
}
