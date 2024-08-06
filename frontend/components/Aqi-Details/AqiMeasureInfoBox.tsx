import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AqiMeasureInfoBox = () => {
    return (
        <LinearGradient
            colors={['#D4FC79', '#96E6A1']}
            start={[0, 0]}
            end={[1, 0]}
            className="p-4 rounded-lg shadow-lg mb-4"
        >
            <Text className="text-white font-bold text-lg mb-2 text-center">
                How Is AQI Measured?
            </Text>
            <Text className="text-white text-base">
                The AQI is calculated based on the concentrations of several pollutants in the air. The primary pollutants that contribute to the AQI are: 
                <Text className="font-bold"> Particulate Matter (PM2.5 and PM10), Ozone (O3), Nitrogen Dioxide (NO2), Sulfur Dioxide (SO2), Carbon Monoxide (CO).</Text>
            </Text>
        </LinearGradient>
    );
};

export default AqiMeasureInfoBox;

