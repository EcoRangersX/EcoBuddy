import React from 'react';
import { View, Text } from 'react-native';

interface AqiLevelItemProps {
  range: string;
  description: string;
  bgColor: string;
}

const AqiLevelItem: React.FC<AqiLevelItemProps> = ({
  range,
  description,
  bgColor,
}) => {
  return (
    <View
      style={{ backgroundColor: bgColor }}
      className="flex-row items-center mb-4 rounded-full flex-1 mr-2 p-2">
      <Text className="text-white font-semibold text-center">{range}</Text>
      <View className="flex-1 ml-2 p-2 rounded-full bg-white">
        <Text className="text-center font-medium">{description}</Text>
      </View>
    </View>
  );
};

export default AqiLevelItem;
