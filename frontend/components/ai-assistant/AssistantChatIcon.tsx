import { Image } from 'react-native';

interface AssistantChatIconProps {
  width?: number;
  height?: number;
}

const AssistantChatIcon = ({ width= 48, height = 48 }: AssistantChatIconProps) => {
  return (
      <Image
        source={require('@/assets/images/ai-assistant-image.png')}
        style={{width: width, height: height}}
        className="rounded-full"
      />
  );
};

export default AssistantChatIcon;
