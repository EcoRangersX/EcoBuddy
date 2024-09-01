import { View, Text } from 'react-native';

interface BulletListProps {
  items: string[];
}

const BulletList = ({ items }: BulletListProps) => {
  return (
    <View className="flex flex-col items-end">
      {items.map((item, index) => (
        <View key={index} className="flex flex-row items-start mb-4">
          <Text className="text-xl leading-6 mr-2">&#8226;</Text>
          <Text className="flex-1 text-base leading-6">{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default BulletList;
