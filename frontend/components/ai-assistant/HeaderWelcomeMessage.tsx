import { View, Text } from 'react-native';
import AssistantChatIcon from './AssistantChatIcon';

const HeaderWelcomeMessage = () => {
  return (
    <View className="flex flex-col items-center mt-2">
      <AssistantChatIcon width={64} height={64} />
      <Text className="bg-white p-3 rounded-lg shadow-sm shadow-black mt-1 w-[90%]">
        Welcome to EcoBuddy AI! 🌍
        {'\n'}I'm your friendly AI assistant, here to help you explore the world
        of ecology. Whether you have questions about{' '}
        <Text className="text-[#1f9165] font-medium">air quality</Text>, climate
        change,{' '}
        <Text className=" text-[#1f9165] font-medium">sustainable living</Text>,
        or anything else related to our environment, I'm here to provide answers
        and insights.
        <Text className="font-semibold">
          {'\n'}Let’s work together to make our planet a greener, healthier
          place!
        </Text>
      </Text>
    </View>
  );
};

export default HeaderWelcomeMessage;
