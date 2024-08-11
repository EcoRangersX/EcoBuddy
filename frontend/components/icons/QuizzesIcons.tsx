import { TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface BasicIconProps {
  color?: string;
  size?: number;
}

interface StartQuizIconProps extends BasicIconProps {
  quiz_id: number;
}

const StartQuizIcon = ({ size = 24, color = 'white', quiz_id }: StartQuizIconProps) => {
  const navigateToQuiz = () => {
    console.log(`Navigating to quiz #${quiz_id}`);
  }

  return (
    <TouchableOpacity
      onPress={navigateToQuiz}
      className="bg-[#9ad5e0] w-9 h-9 rounded-full justify-center items-center">
      <FontAwesome6 name="play" size={size} color={color} />
    </TouchableOpacity>
  );
};

export { StartQuizIcon };
