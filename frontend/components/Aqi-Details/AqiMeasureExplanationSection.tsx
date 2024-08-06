import { View, Text } from 'react-native';
import AqiMeasureInfoBox from './AqiMeasureInfoBox';
import AqiChemicalList from './AqiChemicalList';
import { styles } from '@/constants/GlobalStyles';

const AqiMeasureExplanationSection = () => {
  return (
    <View style={styles.section} className="rounded-lg shadow-xl mt-10">
      <View style={styles.sectionTitle}>
        <Text className="text-white text-center font-bold text-base">
          How is AQI Measured?
        </Text>
      </View>
      <View className='mt-5'>
        <AqiMeasureInfoBox />
      </View>
      <View className='mt-3'>
        <AqiChemicalList />
      </View>
    </View>
  );
};

export default AqiMeasureExplanationSection;
