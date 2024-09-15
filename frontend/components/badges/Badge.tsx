import { Text, View } from 'react-native';

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <View className="bg-blue-500 rounded-full px-4 py-2 shadow-lg">
      <Text className="text-white text-lg font-semibold">{text}</Text>
    </View>
  );
};

export default Badge;
