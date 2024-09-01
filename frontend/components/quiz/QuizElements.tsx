import { View, Text } from 'react-native';

interface QuizStepProps {
  screenWidth: number;
}

const QuizIntroductionStatic = ({ screenWidth }: QuizStepProps) => {
  return (
    <View
      style={{ width: screenWidth * 0.9 }}
      className="flex items-center justify-center px-10 py-5">
      <Text className="text-xl font-bold text-center mb-2">
        Welcome to the eco quiz challenge!
      </Text>
      <Text className="text-sm text-center">
        <Text className="text-base">
          Ready to test your knowledge and become an Eco Expert?
        </Text>
        {'\n'}
        Our quizzes are designed to make learning about ecology fun and
        rewarding. Here’s how you can earn stars, collect badges, and track your
        progress as you explore different ecological topics.
      </Text>
    </View>
  );
};

const HowToEarnStarsStatic = ({ screenWidth }: QuizStepProps) => {
  return (
    <View
      style={{ width: screenWidth * 0.9 }}
      className="flex items-center justify-center px-10 py-5">
      <Text className="text-xl font-bold text-center mb-2">
        How to earn stars
      </Text>
      <Text className="text-sm text-center">
        <Text className="text-base">Answer questions correctly</Text>
        {'\n'}
        Each correct answer earns you a star. The more stars you earn, the
        higher your score.
        {'\n'}
        {'\n'}
        <Text className="text-base">Complete quizzes</Text>
        {'\n'}
        Earn stars by completing quizzes. The more quizzes you complete, the
        more stars you earn.
      </Text>
    </View>
  );
};

const TrackYourProgressStatic = ({ screenWidth }: QuizStepProps) => {
  return (
    <View
      style={{ width: screenWidth * 0.9 }}
      className="flex items-center justify-center px-10 py-5">
      <Text className="text-xl font-bold text-center mb-2">
        Track your progress
      </Text>
      <Text className="text-sm text-center">
        <Text className="text-base">Collect badges</Text>
        {'\n'}
        Earn badges by completing quizzes and answering questions correctly.
        {'\n'}
        {'\n'}
        <Text className="text-base">Track your score</Text>
        {'\n'}
        Keep track of your score and progress as you complete quizzes and earn
        stars.
      </Text>
    </View>
  );
};

const StayMotivatedStatic = ({ screenWidth }: QuizStepProps) => {
  return (
    <View
      style={{ width: screenWidth * 0.9 }}
      className="flex items-center justify-center px-10 py-5">
      <Text className="text-xl font-bold text-center mb-2">Stay motivated</Text>
      <Text className="text-sm text-center">
        <Text className="text-base">Set goals</Text>
        {'\n'}
        Set goals to earn stars and complete quizzes. Challenge yourself to
        learn more about ecology and earn more stars.
        {'\n'}
        {'\n'}
        <Text className="text-base">Share your progress</Text>
        {'\n'}
        Share your progress with friends and family. Challenge them to take the
        quizzes and see who can earn the most stars.
      </Text>
    </View>
  );
};

export {
  QuizIntroductionStatic,
  HowToEarnStarsStatic,
  TrackYourProgressStatic,
  StayMotivatedStatic,
};
