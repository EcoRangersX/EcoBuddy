import { View, Keyboard, FlatList } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { useAskAI } from '@/hooks/ai-assistant/useAskAI';
import Header from '@/components/Header';
import AiResponse from '@/components/ai-assistant/AiResponse';
import UserQuestionBox from '@/components/ai-assistant/UserQuestionBox';
import QuestionInput from '@/components/ai-assistant/QuestionInput';
import WelcomeMessage from '@/components/ai-assistant/WelcomeMessage';

interface QaItem {
  id: string;
  question: string;
  response?: string | null;
}

export default function AiAssistantScreen() {
  const [question, setQuestion] = useState<string>('');
  const [qaList, setQaList] = useState<QaItem[]>([]);

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
    ({ item, index }: {item: QaItem, index: number}) => (
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

const getItemLayout = (_: any, index: number) => ({
  length: 100,
  offset: 100 * index,
  index,
}); // Each item has a fixed height of 100 units

  return (
    <View className="flex-1">
      <Header />
      <WelcomeMessage />
      {/* Optimized FlatList for displaying QaList */}
      <FlatList
        data={qaList}
        keyExtractor={item => item.id}
        renderItem={renderQaItem}
        initialNumToRender={10} // Renders only 10 items initially
        maxToRenderPerBatch={10} // Renders 10 items per batch
        windowSize={5} // Keep 5 screens worth of content in memory
        getItemLayout={getItemLayout}
      />
      <QuestionInput
        question={question}
        setQuestion={setQuestion}
        handleSubmit={submitQuestion}
      />
    </View>
  );
}
