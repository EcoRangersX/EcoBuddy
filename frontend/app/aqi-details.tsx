import { ScrollView, Text, View } from 'react-native';
import Header from '@/components/Header';
import AqiDisplay from '@/components/Aqi-Details/AqiDisplay';
import AqiInfoBox from '@/components/Aqi-Details/AqiInfoBox';
import AqiExplanationSection from '@/components/Aqi-Details/AqiExplanationSection';
import AqiMeasureExplanationSection from '@/components/Aqi-Details/AqiMeasureExplanationSection';

export default function AQIDetails() {
  return (
    <ScrollView>
      {/* Header section */}
      <Header />

      <View className="p-3">
        {/* Title section */}
        <Text className="text-xl">Air Quality Index</Text>

        {/* AQI Display section */}
        <AqiDisplay aqi={14} lastUpdate={14.42} />

        <View className="mt-5">
          {/* AQI Info Box */}
          <AqiInfoBox info="Moderate air quality. People with respiratory or heart conditions may be affected." />
        </View>

        {/* AQI Explanation section */}
        <AqiExplanationSection />

        {/* AQI Measure Explanation section */}
        <AqiMeasureExplanationSection />
      </View>
    </ScrollView>
  );
}
