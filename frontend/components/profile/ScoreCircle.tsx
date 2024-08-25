import { AnimatedCircularProgress } from "react-native-circular-progress";
import { View, Text } from "react-native";

const ScoreCircle = () => {
    return (
     <View>
        <AnimatedCircularProgress
          size={120}
          width={15}
          fill={70}
          tintColor="#00e0ff"
          backgroundColor="#3d5875">
          {
            (fill) => (
              <Text>
                { fill }
              </Text>
            )
          }
        </AnimatedCircularProgress>
     </View>   
    )
}

export default ScoreCircle;
