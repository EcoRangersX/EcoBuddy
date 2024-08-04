import { View, Text } from 'react-native';

const AqiExplanationSection = () => {
    return (
        <View className='p-5 rounded-lg bg-cyan-50 mt-5'>
            <Text className='text-lg font-bold text-teal-700 mb-2'>What Is AQI?</Text>
            <Text className='text-base text-teal-700'>
                The Air Quality Index (AQI) is a tool used to communicate how polluted the air currently is or how polluted it is forecasted to become. It provides a clear and simple way to understand air quality levels and their potential impact on health. The AQI ranges from 0 to 500, where higher values indicate poorer air quality and a greater potential for adverse health effects.
            </Text>
        </View>
    );
};

export default AqiExplanationSection;
