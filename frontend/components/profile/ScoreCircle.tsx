import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { View, Text } from 'react-native';

interface ScoreCircleProps {
  score: number;
  maxScore: number;
  width: number;
  size: number;
}

const ScoreCircle = ({
  score,
  maxScore,
  width = 15,
  size = 150,
}: ScoreCircleProps) => {
  const filledPercentage = (score / maxScore) * 100

  return (
    <View className='shadow-lg shadow-black'>
      <AnimatedCircularProgress
        size={size}
        width={width}
        fill={filledPercentage}
        tintColor="#4bce67"
        backgroundColor="#ffffff"
        rotation={0}
        lineCap='round'>
        {() => (
          <View className="flex items-center">
            <Text className="text-2xl font-semibold">{score}</Text>
            <Text className='text-xs'>Score</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

export default ScoreCircle;
