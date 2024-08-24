import { View, Text } from 'react-native';

interface AiResponseBoxProps {
  response: string;
}

const AiResponseBox = ({ response }: AiResponseBoxProps) => {
  return (
    <View className='bg-white rounded-2xl border-2 border-[#4ac965] shadow-md shadow-black'>
      <Text className='font-base'>{response}</Text>
    </View>
  );
};

export default AiResponseBox;
