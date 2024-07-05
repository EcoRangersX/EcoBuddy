import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View>
      <Text className="flex justify-center bg-green-700 text-[23px]">
        Main age
      </Text>
      <View className="p-5">
        <TextInput
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
      />
      </View>
    </View>
  );
}
