import { View, Text } from 'react-native';
import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import QuizIntroduction from '@/components/quiz/QuizIntroduction';

export default function QuizScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const { id } = useLocalSearchParams();

  const handleOnClose = () => {
    setIsVisible(false);
  };

  // TODO: Implement hook to fetch quiz data using id from local search params

  return (
    <View className="">
      <QuizIntroduction
        isVisible={isVisible}
        onClose={handleOnClose}
      />
      <Text className="">
        Some textrtybyjfdv4ter
        ...dfgfhjkffugyf5t4deyeveubrni8ntufbjydhtgrcet45y6ubydthgfcertv5y6buydthgfbvhdgfb{' '}
        Some text
        ...dfgfhjkffugyf5t4deyeveubrni8ntufbjydhtgrcet45y6ubydthgfcertv5y6buydthgfbvhdgfb{' '}
        Some text
        ...dfgfhjkffugyf5t4deyeveubrni8ntufbjydhtgrcet45y6ubydthgfcertv5y6buydthgfbvhdgfb{' '}
        Some text
        ...dfgfhjkffugyf5t4deyeveubrni8ntufbjydhtgrcet45y6ubydthgfcertv5y6buydthgfbvhdgfb{' '}
        Some text
        ...dfgfhjkjkffugyf5t4deyeveubrni8ntufbjydhtgrcet45y6ubydthgfcertv5y6buydthgfbvhdgfb{' '}
        Some text
        ...dfgfhjkffugyf5t4deyeveubrni8ntufbjydhtgrcet45y6ubydthgfcertv5y6buydthgfbvhdgfb{' '}
        Some text
        ...dfgfhjkffugvffugyf5t4deyeveubrni8ntufbjydhtgrcet45y6ubydthgfcertv5y6buydthgfbvhdgfb{' '}
        Some text
        ...dfgfhjkffugyf5t4deyeveubrni8ntufbjydhtgrcet45y6ubydthgfcertv5y6buydthgfbvhdgfb{' '}
        Some text
        ...dfgfhjkjkffugyf5t4deyeveubrni8ntufbjydhtgrcet45y6ubydthgfcertv5y6buydthgfbvhdgfb{' '}
        Some text
        ...dfgfhjkffugyf5t4deyeveubrni8ntufbjydhtgrcet45y6ubydthgfcertv5y6buydthgfbvhdgfb{' '}
        Some text
        ...dfgfhjkffuffugyf5t4deyeveubrni8ntufbjydhtgrcet45y6ubydthgfcertv5y6buydthgfbvhdgfb{' '}
        Some text
        ...dfgfhjkffugyf5t4deyeveubrni8ntufbjydhtgrcet45y6ubydthgfcertv5y6buydthgfbvhdgfb{' '}
        Some text
        ...dfgfhjkjkffugyf5t4deyeveubrni8ntufbjydhtgrcet45y6ubydthgfcertv5y6buydthgfbvhdgfb{' '}
        Some text
        ...dfgfhjkffugyf5t4deyeveubrni8ntufbjydhtgrcet45y6ubydthgfcertv5y6buydthgfbvhdgfb{' '}
        Some text
        ...dfgfhjkffuyf5t4deyeveubrni8ntufbjydhtgrcet45y6ubydthgfcertv5y6buydthgfbvhdgfb{' '}
      </Text>
    </View>
  );
}
