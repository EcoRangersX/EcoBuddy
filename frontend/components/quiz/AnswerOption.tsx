import { View, TouchableOpacity, Text } from 'react-native';

const AnswerOption = ({
  label,
  option,
  isSelected,
  onSelect,
}: {
  label: string;
  option: string;
  isSelected: boolean;
  onSelect: () => void;
}) => (
  <TouchableOpacity
    className={`flex-row items-center bg-white rounded-full p-4 m-2 ${
      isSelected ? 'bg-green-300' : ''
    }`}
    onPress={onSelect}>
    <View
      className={`w-8 h-8 rounded-full ${
        isSelected ? 'bg-green-500' : 'bg-gray-200'
      } mr-4 items-center justify-center`}>
      <Text
        className={`text-lg ${isSelected ? 'text-white' : 'text-gray-600'}`}>
        {label}
      </Text>
    </View>
    <Text className="text-lg flex-1">{option}</Text>
    {isSelected && (
      <View className="w-6 h-6 bg-green-500 rounded-full items-center justify-center">
        <Text className="text-white">✓</Text>
      </View>
    )}
  </TouchableOpacity>
);

export default AnswerOption;
