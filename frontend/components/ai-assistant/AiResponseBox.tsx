import { View, Text } from 'react-native';
import { DotIndicator } from 'react-native-indicators';
import ErrorMessageBox from '../ErrorMessageBox';

interface AiResponseBoxProps {
  response: string | null | undefined;
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
        <ErrorMessageBox errorMessage={error} />
      ) : (
        <View className='bg-white p-3 rounded-2xl border-2 border-[#4ac965] shadow-md shadow-black'>
          <Text className="text-base">{response}</Text>
        </View>
      )}
    </View>
  );
};

export default AiResponseBox;
