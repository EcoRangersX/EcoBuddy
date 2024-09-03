import { ScrollView, Text, View } from 'react-native';
import Header from '@/components/Header';
import AqiDisplay from '@/components/aqiDetailss/AqiDisplay';
import AqiInfoBox from '@/components/aqiDetailss/AqiInfoBox';
import AqiExplanationSection from '@/components/aqiDetailss/AqiExplanationSection';
import AqiMeasureExplanationSection from '@/components/aqiDetailss/AqiMeasureExplanationSection';
import AirQualityTipList from '@/components/aqiDetailss/AirQualityTipList';
import { airQualityTipsStatic } from '@/constants/StaticData';

export default function AQIDetails() {
  return (
    <ScrollView>
      {/* Header section */}
      <Header />

      <View className="p-3">
        {/* Title section */}
        <Text className="text-xl">Air Quality Index</Text>

        {/* AQI Display section */}
        <View className="mt-2">
          <AqiDisplay aqi={14} lastUpdate={14.42} />
        </View>

        <View className="mt-5">
          {/* AQI Info Box */}
          <AqiInfoBox info="Moderate air quality. People with respiratory or heart conditions may be affected." />
        </View>

        {/* AQI Explanation section */}
        <AqiExplanationSection />

        {/* AQI Measure Explanation section */}
        <AqiMeasureExplanationSection />

        <AirQualityTipList tips={airQualityTipsStatic} />
      </View>
    </ScrollView>
  );
}
