import { View, Text } from 'react-native';
import AqiMeasureInfoBox from './AqiMeasureInfoBox';
import AqiChemicalList from './AqiChemicalList';
import { styles } from '@/constants/GlobalStyles';

const AqiMeasureExplanationSection = () => {
  return (
    <View style={styles.section} className="rounded-lg shadow-xl">
      <View style={styles.sectionTitle}>
        <Text className="text-white text-center font-bold text-base">
          How is AQI Measured?
        </Text>
      </View>
      <View className='mt-3'>
        <AqiMeasureInfoBox />
      </View>
      <View>
        <AqiChemicalList />
      </View>
    </View>
  );
};

export default AqiMeasureExplanationSection;
