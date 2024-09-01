import { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';
import DotsIndicator from './DotsIndicator';
import { NextIcon, PreviousIcon, CloseIcon } from '../icons/Quiz';

const { width: screenWidth } = Dimensions.get('window');

export interface Step {
  title: string;
  description: string;
}

interface QuizIntroductionProps {
  steps: Step[];
  isVisible: boolean;
  onClose: () => void;
}

const QuizIntroduction = ({
  steps,
  isVisible,
  onClose,
}: QuizIntroductionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  // const handleNextScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  //   const index = Math.floor(event.nativeEvent.contentOffset.x / screenWidth);
  //   setCurrentIndex(index + 1);
  // };

  const nextStep = () => {
    if (currentIndex < steps.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: screenWidth * (currentIndex + 1),
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevStep = () => {
    if (currentIndex > 0) {
      scrollViewRef.current?.scrollTo({
        x: screenWidth * (currentIndex - 1),
        animated: true,
      });
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Modal visible={isVisible}>
      <View className="flex-1  z-50">
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          // onScroll={handleScroll}
          scrollEventThrottle={16}>
          {steps.map((step, index) => (
            <View
              key={index}
              style={{ width: screenWidth }}
              className="flex items-center justify-center p-4">
              <Text className="text-2xl font-bold text-center mb-2">
                {step.title}
              </Text>
              <Text className="text-lg text-center">{step.description}</Text>
            </View>
          ))}
        </ScrollView>
        {currentIndex === steps.length - 1 ? (
          <View className='flex-row justify-end mr-8'>
            <CloseIcon size={36} onPress={onClose} />
          </View>
        ) : (
          <View className="flex-row justify-end mr-8 mb-8">
            <PreviousIcon size={36} onPress={prevStep} styles="mr-3" />
            <NextIcon size={36} onPress={nextStep} />
          </View>
        )}
        <DotsIndicator steps={steps} currentIndex={currentIndex} />
      </View>
    </Modal>
  );
};

export default QuizIntroduction;
