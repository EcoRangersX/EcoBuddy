import { View, Text } from 'react-native';
import { styles } from '@/constants/GlobalStyles';

const AqiMeasureInfoBox = () => {
  return (
    <View
      style={styles.BoxStyles}
      className="flex p-2 ">
      <Text className="text-black text-base">
        The AQI is calculated based on the concentrations of several pollutants
        in the air. The primary pollutants that contribute to the AQI are:
        <Text className="font-bold text-[#3baec2]">
          {' '}
          Particulate Matter (PM2.5 and PM10), Ozone (O3), Nitrogen Dioxide
          (NO2), Sulfur Dioxide (SO2), Carbon Monoxide (CO).
        </Text>
      </Text>
    </View>
  );
};

export default AqiMeasureInfoBox;
