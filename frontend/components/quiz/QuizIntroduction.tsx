import { useRef } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

interface Step {
  title: string;
  description: string;
}

interface QuizIntroductionProps {
  steps: Step[];
}

const QuizIntroduction = ({ steps }: QuizIntroductionProps) => {
  const carouselRef = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    carouselRef.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  const quizStep = ({ item }: { item: Step }) => (
    <View className="justify-center items-center px-5">
      <Text className="text-xl font-bold text-center mb-4">{item.title}</Text>
      <Text className="text-base text-center mb-5">{item.description}</Text>
    </View>
  );

  return (
    <View className="flex-1 justify-center items-center p-5 bg-white shadow-md shadow-black">
      <Carousel
        ref={carouselRef}
        width={screenWidth}
        height={screenWidth / 2}
        data={steps}
        onProgressChange={progress}
        renderItem={quizStep}
      />

      <Pagination.Basic
        progress={progress}
        data={steps}
        dotStyle={{ backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 50 }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      />
    </View>
  );
};

export default QuizIntroduction;
