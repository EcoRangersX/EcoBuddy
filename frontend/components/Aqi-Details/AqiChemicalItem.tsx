import { View, Text } from 'react-native';

interface AqiChemicalItemProps {
    name: string;
    description: string;
}

const AqiChemicalItem = ({ name, description }: AqiChemicalItemProps) => {
    return (
        <View className="flex-row items-center mb-4 bg-teal-100 p-4 rounded-lg shadow-sm">
            <View className="flex-1 p-2 bg-teal-300 rounded-full mr-2">
                <Text className="text-white font-bold text-center">{name}</Text>
            </View>
            <View className="flex-3 p-2 bg-white rounded-lg">
                <Text className="text-teal-800">{description}</Text>
            </View>
        </View>
    );
};

export default AqiChemicalItem;

