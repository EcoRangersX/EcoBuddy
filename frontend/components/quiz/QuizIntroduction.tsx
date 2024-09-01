import { useState, useRef } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const steps = [
  {
    title: 'Welcome To The Eco Quiz Challenge!',
    description:
      'Ready To Test Your Knowledge And Become An Eco Expert? Our Quizzes Are Designed To Make Learning About Ecology Fun And Rewarding. Here’s How You Can Earn Stars, Collect Badges, And Track Your Progress As You Explore Different Ecological Topics.',
  },
  // Add more steps as needed
];

const QuizIntroduction = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }) => (
    <View className="justify-center items-center px-5">
      <Text className="text-xl font-bold text-center mb-4">{item.title}</Text>
      <Text className="text-base text-center mb-5">{item.description}</Text>
    </View>
  );

  return (
    <View className="flex justify-center items-center rounded-xl bg-white shadow-lg shadow-black">
      <Text className='text-base text-black'>Screen width: {screenWidth}</Text>
      <Carousel
        ref={carouselRef}
        data={steps}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.8}
        onSnapToItem={index => setActiveIndex(index)}
      />
      <View className="flex-row justify-center mt-5">
        {steps.map((_, index) => (
          <View
            key={index}
            className={`w-2.5 h-2.5 rounded-full mx-1 ${
              index === activeIndex ? 'bg-[#005374]' : 'bg-gray-300'
            }`}
          />
        ))}
      </View>
      <TouchableOpacity
        className="mt-5 bg-[#e0f7fa] w-12 h-12 rounded-full justify-center items-center"
        onPress={() => carouselRef.current.snapToNext()}>
        <FontAwesome name="arrow-right" size={24} color="#00bfff" />
      </TouchableOpacity>
    </View>
  );
};

export default QuizIntroduction;
