import { View, Text } from 'react-native';
import { ErrorIcon } from './icons/ErrorIcon';

interface ErrorMessageBoxProps {
  errorMessage: string;
}

const ErrorMessageBox = ({ errorMessage }: ErrorMessageBoxProps) => {
  return (
    <View className="flex bg-white items-center p-3 rounded-md shadow-md shadow-black">
      <ErrorIcon size={36} />
      <Text className="text-center font-semibold">
        {errorMessage}
        {"\n"}Contact the support team to resolve this issue
      </Text>
    </View>
  );
};

export default ErrorMessageBox;
