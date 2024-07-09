import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  Text,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { useAskAI } from '@/hooks/useAskAI';

interface Message {
  id: string;
  prompt: string;
}

interface aiResponse {
  response: string;
}

export default function AiAssistantScreen() {
  const [question, setQuestion] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [aiResponses, setAiResponses] = useState<aiResponse[]>([]);
  const [combinedList, setCombinedList] = useState<(Message | Response)[]>([]);

  const { askAI, aiResponse, loading, error } = useAskAI();

  useEffect(() => {
    const newCombinedList: (Message | Response)[] = [];
    for (let i = 0; i < messages.length; i++) {
      newCombinedList.push(messages[i]);
      if (aiResponses[i]) {
        newCombinedList.push(aiResponses[i]);
      }
    }
    setCombinedList(newCombinedList);
  }, [messages, aiResponses]);

  const handleSubmit = async () => {
    if (question.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: question }]);
    }
    await askAI(question);
    console.log(aiResponse);

    if (aiResponse) {
      setAiResponses([...aiResponses, { response: aiResponse.response }]);
    }

    setQuestion('');
    Keyboard.dismiss();
  };

  return (
    <View className="flex-1">
      <Header />
      <FlatList
        data={combinedList}
        renderItem={({ item }) =>
          'text' in item ? (
            <View className="mb-2 p-2 bg-gray-200 rounded">
              <Text className="text-lg">{item.prompt}</Text>
            </View>
          ) : (
            <View className="mb-2 p-2 bg-green-200 rounded">
              <Text className="text-lg">{item.response}</Text>
            </View>
          )
        }
        keyExtractor={item =>
          'text' in item ? item.id : `response-${item.id}`
        }
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
            right={
              <TextInput.Icon
                icon={'send'}
                color="green"
                onPress={handleSubmit}
              />
            }
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
