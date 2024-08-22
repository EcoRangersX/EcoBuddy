import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  Text,
} from 'react-native';
import Header from '@/components/Header';
import SendIcon from '@/components/icons/SendIcon';
import { TextInput } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { useAskAI } from '@/hooks/ai-assistant/useAskAI';
import AppLogo from '@/components/icons/AppLogo';

interface Message {
  id: string;
  prompt: string;
}

interface aiResponse {
  id: string;
  response: string;
}

export default function AiAssistantScreen() {
  const [prompt, setPrompt] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [aiResponses, setAiResponses] = useState<aiResponse[]>([]);
  const [combinedList, setCombinedList] = useState<(Message | Response)[]>([]);

  const { askAI, aiResponse, error, loading } = useAskAI();

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

  useEffect(() => {
    if (aiResponse) {
      const newResponse = {
        id: Date.now().toString(),
        response: aiResponse.response,
      };
      setAiResponses([...aiResponses, newResponse]);
    }
  }, [aiResponse]);

  const handleSubmit = async () => {
    if (prompt) {
      const newMessage = { id: Date.now().toString(), prompt: prompt };
      setMessages([...messages, newMessage]);
      setPrompt('');
      Keyboard.dismiss();
      await askAI(prompt);
    }
  };

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">{error}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <Header />
      <AppLogo />
      <FlatList
        data={combinedList}
        renderItem={({ item }) =>
          'prompt' in item ? (
            <View className="mb-2 p-3 bg-gray-200 rounded">
              <Text className="text-lg">{item.prompt}</Text>
            </View>
          ) : (
            <View className="mb-2 p-3 bg-green-200 rounded">
              <Text className="text-lg">
                {loading ? 'Loading ...' : item.response}
              </Text>
            </View>
          )
        }
      />
      {/* TouchableWithoutFeedback component allows users to exit the input field */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="justify-center p-8 flex-row items-center">
            <TextInput
            placeholder="Ask me anything about ecology..."
            mode="outlined"
            multiline={true}
            value={prompt}
            onChangeText={setPrompt}
            theme={{ colors: { primary: 'green' } }}
            className="w-full max-h-48 p-1"
          />
          <SendIcon onPress={handleSubmit} size={28} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
