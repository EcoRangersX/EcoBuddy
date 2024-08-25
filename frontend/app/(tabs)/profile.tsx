import { ScrollView, View } from 'react-native';
import Header from '@/components/Header';
import ProfileHeader from '@/components/profile/ProfileHeader';
import StreakDashboard from '@/components/StreakDashboard';
import ScoreCircle from '@/components/profile/ScoreCircle';

export default function ProfileScreen() {
  const profile_image_url =
    'https://th.bing.com/th/id/R.745bf47c98f396f04e99316860fd2611?rik=vrZ0BYANY5MqmA&pid=ImgRaw&r=0';

  return (
    <ScrollView>
      <Header />
      <View className="p-3">
        <ProfileHeader
          username="jonsd32"
          fullName="John Doe"
          email="john.doe@gmail.com"
          profile_image_url={profile_image_url}
        />
      </View>
      <View className='p-3'>
        <StreakDashboard streak={1} bestStreak={11} />
      </View>
      <ScoreCircle />
    </ScrollView>
  );
}
