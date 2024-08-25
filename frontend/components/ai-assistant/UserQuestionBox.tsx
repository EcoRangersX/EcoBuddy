import { Text, View } from 'react-native';

interface UserQuestionBoxProps {
  question: string;
}

const UserQuestionBox = ({ question }: UserQuestionBoxProps) => {
  return (
    <View className='flex items-end p-5'>
      <View className="bg-slate-200 rounded-md p-3 w-[90%] border-2 border-[#252633] shadow-md shadow-black">
        <Text className="text-base">{question}</Text>
      </View>
    </View>
  );
};

export default UserQuestionBox;
