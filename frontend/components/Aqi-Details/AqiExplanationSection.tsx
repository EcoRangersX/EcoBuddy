import { View, Text } from 'react-native';
import { styles } from '@/constants/GlobalStyles';
import { AqiExplanationBox } from './AqiExplanationBox';
import { AqiLevelList } from './AqiLevelList';

const AqiExplanationSection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionTitle}>
        <Text className="text-lg font-bold text-white text-center">
          What is AQI?
        </Text>
      </View>
      <AqiExplanationBox />
      <View className="mt-2">
        {/* AQI Level List */}
        <AqiLevelList />
      </View>
    </View>
  );
};

export default AqiExplanationSection;
