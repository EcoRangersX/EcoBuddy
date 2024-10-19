import { View, TouchableOpacity, Text } from 'react-native';

interface AnswerOptionProps {
  label: number;
  option: string;
  isSelected?: boolean;
  onSelect: () => void;
}

const AnswerOption = ({
  label,
  option,
  isSelected,
  onSelect,
}: AnswerOptionProps) => (
  <TouchableOpacity
    className={`flex-row items-center bg-white shadow-sm shadow-black rounded-2xl p-4 m-2 ${
      isSelected ? 'bg-gray-300' : ''
    }`}
    onPress={onSelect}>
    <View
      className={`w-8 h-8 items-center justify-center rounded-full ${
        isSelected ? 'bg-gray-400' : 'bg-gray-300'
      }`}>
      <Text className={`text-lg text-black}`}>{label}</Text>
    </View>
    <Text className="text-lg flex-1 text-center">{option}</Text>
    {/* <View className="w-8 h-8 rounded-full items-center justify-center border-2 border-gray-300">
      {isSelected && (
        <View className="w-8 h-8 bg-gray-400 rounded-full items-center justify-center">
          <Text className="text-white">✓</Text>
        </View>
      )}
    </View> */}
  </TouchableOpacity>
);

export default AnswerOption;
