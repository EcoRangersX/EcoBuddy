import { useState } from 'react';
import { View, Text } from 'react-native';

interface EcoTipProps {
  title: string;
  description: string;
}

const EcoTip = ({ title, description }: EcoTipProps) => {
  const [titleHeight, setTitleHeight] = useState(0);

  return (
    <View className="flex p-4 rounded-lg relative">
      <Text
        onLayout={event => {
          const { height } = event.nativeEvent.layout;
          setTitleHeight(height);
        }}
        className="bg-[#f6fef8] border z-50 border-[#4bce67] mb-32 rounded-full py-2 text-center text-green-600 font-semibold">
        {title}
      </Text>
      <View style={{ top: titleHeight }} className="absolute left-10 p-5 bg-green-200 rounded-[24px] shadow-md shadow-black">
        <Text className="text-green-800">{description}</Text>
      </View>
    </View>
  );
};

export default EcoTip;
