import React from 'react';
import { View } from 'react-native';
import AqiLevelItem from './AqiLevelItem';
import { AqiLevelColors } from '@/constants/Colors';

const AqiLevelList: React.FC = () => {
    const aqiLevels = [
        { range: '0 - 50', description: 'good', bgColor: AqiLevelColors.good },
        { range: '51 - 100', description: 'moderate', bgColor: AqiLevelColors.moderate },
        { range: '101 - 150', description: 'sensitive groups', bgColor: AqiLevelColors.sensitiveGroups },
        { range: '151 - 200', description: 'unhealthy', bgColor: AqiLevelColors.unhealthy },
        { range: '201 - 300', description: 'very unhealthy', bgColor: AqiLevelColors.veryUnhealthy },
        { range: '301 - 500', description: 'hazardous', bgColor: AqiLevelColors.hazardous },
    ];

    return (
        <View className="p-4 bg-gray-100 rounded-lg">
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

