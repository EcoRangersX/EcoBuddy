import { View } from 'react-native';
import AqiMeasureInfoBox from './AqiMeasureInfoBox';
import AqiChemicalList from './AqiChemicalList';

const AqiMeasureExplanationSection = () => {
    return (
        <View className="p-6 bg-white rounded-lg shadow-xl">
            <AqiMeasureInfoBox />
            <AqiChemicalList />
        </View>
    );
};

export default AqiMeasureExplanationSection;

