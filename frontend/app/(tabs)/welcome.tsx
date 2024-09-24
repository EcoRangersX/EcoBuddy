import { View, Text, Image } from 'react-native';
import AppLogo from '@/components/icons/AppLogo';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  const handleCreateAccount = () => {
    router.push('/signup');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <View className="flex-1 relative">
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        source={require('@/assets/images/bg-welcome-screen.png')}
      />
      <View className="flex p-8 mt-12">
        <AppLogo width={130} height={130} />
        <Text className="text-xl text-white font-semibold">
          Your Companion for a Greener Tomorrow
        </Text>
      </View>
      {/* SignUp/LogIn buttons section */}
      <View className="flex-1 justify-end mb-5 space-y-4 p-4">
        <Button
          onPress={handleCreateAccount}
          mode="contained"
          className="bg-[#098323] rounded-[40px]">
          <Text className="text-white text-center text-lg">
            Create an account
          </Text>
        </Button>
        <Button
          onPress={handleLogin}
          mode="contained"
          className="bg-[#098323] rounded-[40px]">
          <Text className="text-white text-center text-lg">
            Log in with EcoBuddy
          </Text>
        </Button>
      </View>
    </View>
  );
}
