import { IconButton } from 'react-native-paper';

interface SendIconProps {
  iconColor?: string;
  size?: number;
  onPress: () => void;
}

const SendIcon: React.FC<SendIconProps> = ({
  iconColor = 'green',
  size = 24,
  onPress,
}) => {
  return (
    <IconButton
      icon="send"
      iconColor={iconColor}
      size={size}
      onPress={onPress}
    />
  );
};

export default SendIcon;
