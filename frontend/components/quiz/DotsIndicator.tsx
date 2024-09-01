import { View } from 'react-native';
import { Step } from './QuizIntroduction';

interface DotsIndicatorProps {
  steps: Step[];
  currentIndex: number;
}

const DotsIndicator = ({ steps, currentIndex }: DotsIndicatorProps) => {
  return (
    <View className="flex-row justify-center mt-4">
      {steps.map((_, index) => (
        <View
          key={index}
          className={`indicator ${
            index === currentIndex ? 'active-indicator' : 'inactive-indicator'
          }`}
        />
      ))}
    </View>
  );
};

export default DotsIndicator;
