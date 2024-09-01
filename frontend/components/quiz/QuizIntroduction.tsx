import { useState, useRef } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, Modal } from 'react-native';
import DotsIndicator from './DotsIndicator';
import { NextIcon, PreviousIcon } from '../icons/Quiz';

const { width: screenWidth } = Dimensions.get('window');

export interface Step {
  title: string;
  description: string;
}

interface QuizIntroductionProps {
  steps: Step[];
  isVisible: boolean;
}

const QuizIntroduction = ({ steps, isVisible }: QuizIntroductionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / screenWidth);
    setCurrentIndex(index);
  };

  const nextStep = () => {
    if (currentIndex < steps.length - 1) {
      scrollViewRef.current?.scrollTo({ x: screenWidth * (currentIndex + 1), animated: true });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevStep = () => {
    if (currentIndex > 0) {
      scrollViewRef.current?.scrollTo({ x: screenWidth * (currentIndex - 1), animated: true });
      setCurrentIndex(currentIndex - 1);
    }
  }

  console.log(`Index of current step in QuizIntroduction: ${currentIndex}`)

  return (
    <Modal visible={isVisible} >
      <View className="flex-1 bg-white z-50">
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          // onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {steps.map((step, index) => (
            <View key={index} style={{ width: screenWidth }} className="flex items-center justify-center p-4">
              <Text className="text-2xl font-bold text-center mb-2">{step.title}</Text>
              <Text className="text-lg text-center">{step.description}</Text>
            </View>
          ))}
        </ScrollView>
        <DotsIndicator steps={steps} currentIndex={currentIndex} />
        <NextIcon size={36} onPress={nextStep} />
        <PreviousIcon size={36} onPress={prevStep} />
        {currentIndex === 2 && (
          <Text className='text-xl font-semibold'>Close Button will be here</Text>
        )}
      </View>
    </Modal>
  );
};

export default QuizIntroduction;
