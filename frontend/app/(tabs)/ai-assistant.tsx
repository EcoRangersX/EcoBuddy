import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  Text
} from 'react-native';
import Header from '@/components/Header';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';

interface Message {
  id: string;
  text: string;
}

export default function AiAssistantScreen() {
  const [question, setQuestion] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = () => {
    if (question.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: question }]);
    }
    setQuestion('');
    Keyboard.dismiss();
  };

  return (
    <View className="flex-1">
      <Header />
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View className="mb-2 p-2 bg-gray-200 rounded">
            <Text className="text-lg">{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        className="flex-1 mb-4"
      />
      {/* TouchableWithoutFeedback component allows users to exit the input field */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="p-2 flex-1 justify-end">
          <TextInput
            placeholder="Ask me anything about ecology..."
            mode="outlined"
            multiline={true}
            value={question}
            onChangeText={setQuestion}
            theme={{ colors: { primary: 'green' } }}
            className="w-full max-h-48 p-2"
            right={<TextInput.Icon icon={'send'} color="green" onPress={handleSubmit} />}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
