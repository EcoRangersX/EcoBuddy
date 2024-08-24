import { View, Text } from 'react-native';
import { DotIndicator } from 'react-native-indicators';

interface AiResponseBoxProps {
  response: string;
  loading: boolean;
  error: string | null;
}

const AiResponseBox = ({ response, loading, error }: AiResponseBoxProps) => {
  return (
    <View className="">
      {loading ? (
        <View className='bg-white w-1/2 h-14 rounded-2xl border-2 border-[#4ac965] shadow-md shadow-black'>
          <DotIndicator count={3} color="#000000" />
        </View>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <View className='bg-white rounded-2xl border-2 border-[#4ac965] shadow-md shadow-black'>
          <Text className="font-base">{response}</Text>
        </View>
      )}
    </View>
  );
};

export default AiResponseBox;
