import { View, Text } from 'react-native';
import { styles } from '@/constants/GlobalStyles';

const AqiExplanationSection = () => {
  return (
    <View className="px-2 rounded-lg mt-7">
      <View
        style={styles.sectionTitle
        }>
        <Text className="text-lg font-bold text-white text-center">
          What is AQI?
        </Text>
      </View>
      <View
        style={styles.BoxStyles}
        className="mt-4 p-3">
        <Text className="text-base text-[#3baec2]">
          The Air Quality Index (AQI){' '}
          <Text className="text-black">
            is a tool used to communicate how polluted the air currently is or
            how polluted it is forecasted to become. It provides a clear and
            simple way to understand air quality levels and their potential
            impact on health. The AQI ranges from{' '}
            <Text className="text-[#3baec2]">0 to 500</Text>, where higher
            values indicate poorer air quality and a greater potential for
            adverse health effects.
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default AqiExplanationSection;
