import { Switch } from 'react-native-paper';
import { View, Text } from 'react-native';

interface NotificationToggleProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
    label: string;
}

const NotificationToggle = ({ value, onValueChange, label }: NotificationToggleProps) => {
  return (
    <View className="bg-white rounded-full p-1 w-2/3 flex-row shadow-sm shadow-black justify-evenly items-center">
      <Text className="text-lg">{label}</Text>
      <Switch value={value} onValueChange={onValueChange} color="#2abb64" />
    </View>
  );
};

export default NotificationToggle;
