import { useState, useRef } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, Modal } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

interface Step {
  title: string;
  description: string;
}

interface QuizIntroductionProps {
  steps: Step[];
  isVisible: boolean;
  onClose: () => void;
}

const QuizIntroduction = ({ steps, isVisible, onClose }: QuizIntroductionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / screenWidth);
    setCurrentIndex(index);
  };

  const nextStep = () => {
    if (currentIndex < steps.length - 1) {
      scrollViewRef.current?.scrollTo({ x: screenWidth * (currentIndex + 1), animated: true });
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View className="flex-1 justify-center items-center bg-white">
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {steps.map((step, index) => (
            <View key={index} className="w-full p-4 justify-center items-center" style={{ width: screenWidth }}>
              <Text className="text-xl font-bold text-center mb-4">{step.title}</Text>
              <Text className="text-base text-center">{step.description}</Text>
            </View>
          ))}
        </ScrollView>
        <View className="flex-row justify-center mt-5">
          {steps.map((_, index) => (
            <View
              key={index}
              className={`w-2.5 h-2.5 rounded-full mx-1 ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            />
          ))}
        </View>
        <TouchableOpacity className="mt-5 bg-blue-500 w-12 h-12 rounded-full justify-center items-center" onPress={nextStep}>
          <Text className="text-white text-lg">{currentIndex < steps.length - 1 ? '→' : 'X'}</Text>
        </TouchableOpacity>
        {currentIndex === steps.length - 1 && (
          <TouchableOpacity className="mt-5" onPress={onClose}>
            <Text className="text-blue-500">Close</Text>
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
};

export default QuizIntroduction;
