import { View, Text } from 'react-native';
import AiResponseBox from './AiResponseBox';
import AssistantChatIcon from './AssistantChatIcon';

interface AiResponseProps {
  response: string | null;
  loading: boolean;
  error: string | null;
}

const AiResponse = ({ response, loading, error }: AiResponseProps) => {
  return (
    <View className="flex flex-col p-3">
      <View className="flex flex-row items-center space-x-4">
        <AssistantChatIcon />
        <Text className='text-lg font-semibold'>EcoBuddy AI</Text>
      </View>
      <View className="mt-3">
        <AiResponseBox response={response} loading={loading} error={error} />
      </View>
    </View>
  );
};

export default AiResponse;
