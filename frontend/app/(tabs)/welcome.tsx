import { View, Text, Image } from 'react-native';
import AppLogo from '@/components/icons/AppLogo';

export default function WelcomeScreen() {
  return (
    <View className='flex-1 relative'>
      <Image
        className='absolute inset-0 w-full h-full object-cover'
        source={require('@/assets/images/bg-welcome-screen.png')}
      />
      <View className='flex p-8 mt-20'>
        <AppLogo width={130} height={130} />
        <Text className="text-lg text-white font-semibold">
          Your Companion for a Greener Tomorrow
        </Text>
      </View>
    </View>
  );
}
