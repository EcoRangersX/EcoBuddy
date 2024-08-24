import { TouchableOpacity, Image } from 'react-native';

interface AssistantChatIconProps {
  width?: number;
  height?: number;
}

const AssistantChatIcon = ({ width= 42, height = 42 }: AssistantChatIconProps) => {
  return (
    <TouchableOpacity style={{width: width, height: height}} className="flex rounded-full items-center justify-center bg-white shadow-lg shadow-black">
      <Image
        source={require('@/assets/images/ai-assistant-image.png')}
        className="rounded-full w-14 h-14"
      />
    </TouchableOpacity>
  );
};

export default AssistantChatIcon;
