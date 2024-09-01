import { View, Text } from 'react-native';

interface AqiChemicalItemProps {
    name: string;
    description: string;
}

const AqiChemicalItem = ({ name, description }: AqiChemicalItemProps) => {
    return (
        <View className="flex flex-row items-center mb-5 p-2 bg-[#bff1f9] rounded-[30px] shadow-md shadow-black">
            <View className="p-2 bg-[#3baec2] rounded-full absolute top-0 left-5 w-1/3">
                <Text className="text-white font-bold text-center">{name}</Text>
            </View>
            <View className="flex items-baseline mt-10">
                <Text className="text-teal-800">{description}</Text>
            </View>
        </View>
    );
};

export default AqiChemicalItem;
