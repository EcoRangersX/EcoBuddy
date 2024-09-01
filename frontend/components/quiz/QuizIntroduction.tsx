import { useRef } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';

const { width: screenWidth, height: ScreenHeight } = Dimensions.get('window');

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
    <View className="justify-center items-center ">
      <Text className="text-xl font-bold text-center mb-4">{item.title}</Text>
      <Text className="text-base text-center mb-5">{item.description}</Text>
    </View>
  );

  return (
    <View className="">
      <Carousel
        style={{ backgroundColor: "white", borderColor: "blue", borderRadius: 20 }}
        ref={carouselRef}
        width={screenWidth}
        height={ScreenHeight * 0.5}
        data={steps}
        
        // onProgressChange={progress}
        renderItem={quizStep}
      />
      
       {/* <Pagination
        progress={progress}
        data={steps}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      /> */}
    </View>
  );
};

export default QuizIntroduction;
