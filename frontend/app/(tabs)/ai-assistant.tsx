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
import AiResponse from '@/components/ai-assistant/AiResponse';
import UserQuestionBox from '@/components/ai-assistant/UserQuestionBox';

interface QAItem {
  id: string;
  question: string;
  response?: string;
}

export default function AiAssistantScreen() {
  const [question, setQuestion] = useState<string>('');
  const [qaList, setQaList] = useState<QAItem[]>([]);

  const { askAI, aiResponse, loadingAiResponse, errorAiResponseMsg } =
    useAskAI();

  useEffect(() => {
    if (aiResponse) {
      setQaList(prevQaList =>
        prevQaList.map(item =>
          item.response ? item : { ...item, response: aiResponse.response },
        ),
      );
    }
  }, [aiResponse]);

  const handleSubmit = async () => {
    if (question) {
      const newQuestion = { id: Date.now().toString(), question: question };
      setQaList([...qaList, newQuestion]);
      setQuestion('');
      Keyboard.dismiss();
      await askAI(question);
    }
  };

  return (
    <View className="flex-1">
      <Header />
      {/* <AiResponseBox response={response} loading={false} error={""} /> */}
      <FlatList
        data={qaList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View className="">
            <UserQuestionBox question={item.question} />
            {item.response && (
              <AiResponse
                response={item.response}
                loading={loadingAiResponse}
                error={errorAiResponseMsg}
              />
            )}
          </View>
        )}
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
