import { View } from 'react-native';
import { Step } from './QuizIntroduction';

interface DotsIndicatorProps {
  steps: Step[];
  currentIndex: number;
}

const DotsIndicator = ({ steps, currentIndex }: DotsIndicatorProps) => {
  return (
    <View className="flex-row space-x-1 justify-center">
      {steps.map((_, index) => (
        <View
          key={index}
          className={`border-[#61c9ba] border-2 rounded-full w-5 h-5 ${
            index === currentIndex ? 'bg-[#61c9ba]' : ''
          }`}
        />
      ))}
    </View>
  );
};

export default DotsIndicator;
