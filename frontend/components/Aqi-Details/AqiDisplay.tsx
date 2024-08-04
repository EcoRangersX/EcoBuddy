import { View, Text } from 'react-native';

interface AqiDisplayProps {
    aqi: number;
}

const AqiDisplay = ({ aqi }: AqiDisplayProps) => {
    const getStatus = (aqi: number) => {
        if (aqi <= 50) return 'good';
        // Add more conditions as needed
        return 'unhealthy';
    };

    return (
        <View className='flex items-center justify-center p-5 rounded-lg bg-green-500'>
            <Text className='text-4xl font-bold text-white'>{aqi}</Text>
            <Text className='text-lg text-white'>{getStatus(aqi)}</Text>
        </View>
    );
};

export default AqiDisplay;
