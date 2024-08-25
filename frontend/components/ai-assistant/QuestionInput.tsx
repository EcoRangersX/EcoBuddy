import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import SendIcon from '../icons/AiAssistant';

interface QuestionInputProps {
  question: string;
  setQuestion: (question: string) => void;
  handleSubmit: () => void;
}

const QuestionInput = ({ question, setQuestion, handleSubmit }: QuestionInputProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="justify-center px-10 py-3  flex-row items-center">
        <TextInput
          placeholder="Ask me anything about ecology..."
          mode="outlined"
          multiline={true}
          value={question}
          onChangeText={setQuestion}
          theme={{ colors: { primary: 'green' } }}
          className="w-full max-h-48 p-1"
        />
        <SendIcon onPress={handleSubmit} size={28} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default QuestionInput;
