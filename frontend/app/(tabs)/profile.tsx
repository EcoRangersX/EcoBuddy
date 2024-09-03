import { ScrollView, View } from 'react-native';
import Header from '@/components/Header';
import ProfileHeader from '@/components/profile/ProfileHeader';
import YourAchievementsSection from '@/components/YourAchievementsSection';
import { takenQuizzesStatic } from '@/constants/StaticData';
import SavedArticles from '@/components/profile/SavedArticles';
import { savedArticlesStatic } from '@/constants/StaticData';

export default function ProfileScreen() {
  const profile_image_url =
    'https://th.bing.com/th/id/R.745bf47c98f396f04e99316860fd2611?rik=vrZ0BYANY5MqmA&pid=ImgRaw&r=0';

  return (
    <ScrollView>
      <Header />
      <View className="p-3">
        {/* TODO: Replace static data with dynamic data once hook is ready */}
        <ProfileHeader
          username="jonsd32"
          fullName="John Doe"
          email="john.doe@gmail.com"
          profile_image_url={profile_image_url}
        />
      </View>
      {/* TODO: Replace static data with dynamic data once hook is ready */}
      <YourAchievementsSection
        score={3455}
        maxScore={10000}
        articleScore={1522}
        quizScore={1933}
        bestStreak={11}
        streak={2}
        takenQuizzes={takenQuizzesStatic}
      />
      {/* TODO: Replace static data with dynamic data once hook is ready */}
      <SavedArticles savedArticles={savedArticlesStatic} />
    </ScrollView>
  );
}
