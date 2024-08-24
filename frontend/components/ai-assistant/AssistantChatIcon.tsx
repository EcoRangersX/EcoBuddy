import { TouchableOpacity, Image } from 'react-native';

const AssistantChatIcon = () => {
  return (
    <TouchableOpacity className='flex rounded-full w-16 h-16 items-center justify-center bg-white shadow-lg shadow-black'>
        <Image source={require("@/assets/images/ai-assistant-image.png")} className='rounded-full w-14 h-14' />
    </TouchableOpacity>
  );
};

export default AssistantChatIcon;
