import Modal from 'react-native-modal';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

interface ModalFeedbackProps {
  isAnswerCorrect: boolean | null;
  isVisible: boolean;
  correctAnswer: string;
  nextQuestion: () => void;
	isLastQuestion?: boolean;
  showResults?: () => void;
}

export const ModalFeedback = ({
  isAnswerCorrect,
  isVisible,
  correctAnswer,
	isLastQuestion,
  nextQuestion,
  showResults,
}: ModalFeedbackProps) => {
  return (
    <Modal
      isVisible={isVisible}
      animationInTiming={400}
      animationOutTiming={600}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}>
      <View className="bg-white p-10 rounded-md">
        <Text
          className={`text-center text-lg ${
            isAnswerCorrect ? 'text-green-500' : 'text-[#ec4444]'
          }`}>
          {isAnswerCorrect
            ? `🎉 Keep it up! ${'\n'} You got it right!`
            : `❌ Oops! Don't worry, you'll get the next one!`}
        </Text>
        <View className="relative">
          {!isAnswerCorrect && (
            <Text>
              The correct answer: {''}
              <Text className="font-bold">{correctAnswer}</Text>
            </Text>
          )}
					{isLastQuestion ? (
						<Button
							className="mt-4"
							onPress={showResults}
							textColor="black"
							mode="contained-tonal">
							<Text className="text-base">Show Results</Text>
						</Button>
					) : (
						<Button
							className="mt-4"
							onPress={nextQuestion}
							textColor="black"
							mode="contained-tonal">
							<Text className="text-base">Next</Text>
						</Button>
					)}
          {/* Uncomment when implementing for the attempts of guessing logic */}
          {/* {!isCorrect ? ( 
                // <View className='mt-16'>
                //   <Button
                //     mode="contained-tonal"
                //     style={{
                //       position: 'absolute',
                //       bottom: -20,
                //       left: -20,
                //     }}
                //     onPress={handleCloseFeedback}>
                //     <Text className="text-base">Try Again</Text>
                //   </Button>
                //   <Button
                //     onPress={nextQuestion}
                //     style={{
                //       position: 'absolute',
                //       bottom: -20,
                //       right: -20,
                //     }}
                //     textColor="black"
                //     mode="contained-tonal">
                //     <Text className="text-base">Next</Text>
                //   </Button>
                // </View>
              ) : (
                // <Button
                //   className='mt-4'
                //   onPress={nextQuestion}
                //   textColor="black"
                //   mode="contained-tonal">
                //   <Text className="text-base">Next</Text>
                // </Button>
              )}
              */}
        </View>
      </View>
    </Modal>
  );
};
