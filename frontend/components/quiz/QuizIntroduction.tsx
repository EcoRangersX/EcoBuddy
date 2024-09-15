import { useState, useRef } from 'react';
import { View, Dimensions, Modal, FlatList  } from 'react-native';
import DotsIndicator from './DotsIndicator';
import { NextIcon, PreviousIcon, CloseButton } from '../icons/Quiz';
import { BlurView } from 'expo-blur';
import {
  QuizIntroductionStatic,
  HowToEarnStarsStatic,
  TrackYourProgressStatic,
  StayMotivatedStatic,
} from '@/components/quiz/QuizElements';

const { width: screenWidth } = Dimensions.get('window');

export interface Step {
  jsx_element: JSX.Element;
}

interface QuizIntroductionProps {
  isVisible: boolean;
  onClose: () => void;
}

const quizStepsStatic = [
  {
    jsx_element: <QuizIntroductionStatic screenWidth={screenWidth} />,
  },
  {
    jsx_element: <HowToEarnStarsStatic screenWidth={screenWidth} />,
  },
  {
    jsx_element: <TrackYourProgressStatic screenWidth={screenWidth} />,
  },
  {
    jsx_element: <StayMotivatedStatic screenWidth={screenWidth} />,
  },
];

const QuizIntroduction = ({
  isVisible,
  onClose,
}: QuizIntroductionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // const handleSwapping = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  //   const offsetX = event.nativeEvent.contentOffset.x;
  //   const tolerance = 10;
  //   const index = Math.floor((offsetX + tolerance) / screenWidth);
  //   console.log(`Calculated index: ${index}, OffsetX: ${offsetX}`)
  //   setCurrentIndex(index);
  // };

  const nextStep = () => {
    if (currentIndex < quizStepsStatic.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevStep = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex - 1,
        animated: true,
      });
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Modal visible={isVisible} transparent>
      <BlurView
        experimentalBlurMethod=""
        intensity={50}
        className="flex-1 h-full justify-center items-center">
        <View className="w-[95%] rounded-[20px] bg-white shadow-md shadow-black">
          <FlatList
            ref={flatListRef}
            horizontal
            pagingEnabled
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            keyExtractor={(_, index) => index.toString()}
            data={quizStepsStatic}
            // onMomentumScrollEnd={handleSwapping}
            renderItem={({ item }) => item.jsx_element}></FlatList>
          <View className="justify-around flex-row items-center mb-3">
            <DotsIndicator steps={quizStepsStatic} currentIndex={currentIndex} />
            {currentIndex === quizStepsStatic.length - 1 ? (
              <View className="flex-row">
                <PreviousIcon size={36} onPress={prevStep} styles="mr-3" />
                <CloseButton size={36} onPress={onClose} />
              </View>
            ) : (
              <View className="flex-row ">
                <PreviousIcon size={36} onPress={prevStep} styles="mr-3" />
                <NextIcon size={36} onPress={nextStep} />
              </View>
            )}
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

export default QuizIntroduction;
