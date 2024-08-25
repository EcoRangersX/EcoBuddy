import { View, Keyboard, FlatList } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { useAskAI } from '@/hooks/ai-assistant/useAskAI';
import Header from '@/components/Header';
import AiResponse from '@/components/ai-assistant/AiResponse';
import UserQuestionBox from '@/components/ai-assistant/UserQuestionBox';
import QuestionInput from '@/components/ai-assistant/QuestionInput';

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

  const submitQuestion = async () => {
    if (question) {
      const newQuestion = { id: Date.now().toString(), question: question };
      setQaList([...qaList, newQuestion]);
      setQuestion('');
      Keyboard.dismiss();
      await askAI(question);
    }
  };

  const renderQaItem = useCallback(
    ({ item, index }) => (
      <View>
        <UserQuestionBox question={item.question} />
        {/* Showing loading state only for the last aiResponse in qaList */}
        {index === qaList.length - 1 && loadingAiResponse ? (
          <AiResponse response={null} loading={true} error={null} />
        ) : (
          <AiResponse
            response={item.response}
            loading={false}
            error={errorAiResponseMsg}
          />
        )}
      </View>
    ),
    [qaList, loadingAiResponse, errorAiResponseMsg],
  );

  const keyExtractor = useCallback(item => item.id, []);

  return (
    <View className="flex-1">
      <Header />
      {/* <AiResponseBox response={response} loading={false} error={""} /> */}
      <FlatList
        data={qaList}
        keyExtractor={keyExtractor}
        renderItem={renderQaItem}
        initialNumToRender={10}
        getItemLayout={(data, index) => (
          {length: 100, offset: 100 * index, index}
        )}
      />
      <QuestionInput
        question={question}
        setQuestion={setQuestion}
        handleSubmit={submitQuestion}
      />
    </View>
  );
}
