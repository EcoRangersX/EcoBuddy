import { View, Text } from 'react-native';
import AqiMeasureInfoBox from './AqiMeasureInfoBox';
import AqiChemicalList from './AqiChemicalList';
import { styles } from '@/constants/GlobalStyles';

const AqiMeasureExplanationSection = () => {
  return (
    <View className=" rounded-lg shadow-xl">
      <View style={styles.sectionTitle} className='p-2'>
        <Text className="text-white font-bold text-base">
          How is AQI Measured?
        </Text>
      </View>
      <AqiMeasureInfoBox />
      <AqiChemicalList />
    </View>
  );
};

export default AqiMeasureExplanationSection;
