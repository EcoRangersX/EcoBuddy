import { View } from 'react-native';
import AqiLevelItem from './AqiLevelItem';
import { AqiLevelColors } from '@/constants/Colors';

const AqiLevelList = () => {
    const aqiLevels = [
        { range: '0 - 50', description: 'Good', bgColor: AqiLevelColors.good },
        { range: '51 - 100', description: 'Moderate', bgColor: AqiLevelColors.moderate },
        { range: '101 - 150', description: 'Sensitive groups', bgColor: AqiLevelColors.sensitiveGroups },
        { range: '151 - 200', description: 'Unhealthy', bgColor: AqiLevelColors.unhealthy },
        { range: '201 - 300', description: 'Very unhealthy', bgColor: AqiLevelColors.veryUnhealthy },
        { range: '301 - 500', description: 'Hazardous', bgColor: AqiLevelColors.hazardous },
    ];

    return (
        <View className="p-2">
            {aqiLevels.map((level, index) => (
                <AqiLevelItem
                    key={index}
                    range={level.range}
                    description={level.description}
                    bgColor={level.bgColor}
                />
            ))}
        </View>
    );
};

export default AqiLevelList;

