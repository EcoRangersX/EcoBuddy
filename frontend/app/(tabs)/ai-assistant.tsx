import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  Text,
} from 'react-native';
import Header from '@/components/Header';
import SendIcon from '@/components/icons/AiAssistant';
import { TextInput } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { useAskAI } from '@/hooks/ai-assistant/useAskAI';
import AssistantChatIcon from '@/components/ai-assistant/AssistantChatIcon';
import AiResponseBox from '@/components/ai-assistant/AiResponseBox';

interface Message {
  id: string;
  prompt: string;
}

interface aiResponse {
  id: string;
  response: string;
}

export default function AiAssistantScreen() {
  const [question, setQuestion] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [aiResponses, setAiResponses] = useState<aiResponse[]>([]);
  const [combinedList, setCombinedList] = useState<(Message | Response)[]>([]);

  const { askAI, aiResponse, loadingAiResponse, errorAiResponseMsg } = useAskAI();

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
    if (question) {
      const newMessage = { id: Date.now().toString(), prompt: question };
      setMessages([...messages, newMessage]);
      setQuestion('');
      Keyboard.dismiss();
      await askAI(question);
    }
  };

  if (errorAiResponseMsg) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">{errorAiResponseMsg}</Text>
      </View>
    );
  }

  const response = `
    Welcome to EcoBuddy AI! 🌍
    Hello there! I'm your friendly AI assistant, here to help you explore the world of ecology. Whether you have questions about air quality, climate change, sustainable living, or anything else related to our environment, I'm here to provide answers and insights.
    Feel free to ask me anything, like:
    "What can I do to reduce my carbon footprint?"
    "How does pollution affect marine life?"
    "What are the benefits of using renewable energy?"
    I’m also here to offer personalized eco tips, recommend articles, and even quiz you on your environmental knowledge. Let’s work together to make our planet a greener, healthier place!
  `;

  return (
    <View className="flex-1">
      <Header />
      <AssistantChatIcon />
      <AiResponseBox response={response} />
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
                {loadingAiResponse ? 'Loading ...' : item.response}
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
            value={question}
            onChangeText={setQuestion}
            theme={{ colors: { primary: 'green' } }}
            className="w-full max-h-48 p-1"
          />
          <SendIcon onPress={handleSubmit} size={28} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
