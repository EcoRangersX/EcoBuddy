import { ScrollView, View } from 'react-native';
import Header from '@/components/Header';
import ProfileHeader from '@/components/profile/ProfileHeader';
import YourAchievementsSection from '@/components/YourAchievementsSection';
import { takenQuizzesStatic } from '@/constants/StaticData';
import SavedArticles from '@/components/profile/SavedArticles';
import {
  savedArticlesStatic,
  yourAchievementsStatic,
  userProfileStatic,
} from '@/constants/StaticData';

export default function ProfileScreen() {

  return (
    <ScrollView>
      <Header />
      <View className="p-3">
        {/* TODO: Replace static data with dynamic data once hook is ready */}
        <ProfileHeader
          username={userProfileStatic.username}
          fullName={userProfileStatic.fullName}
          email={userProfileStatic.email}
          profile_image_url={userProfileStatic.profile_image_url}
        />
        <YourAchievementsSection
          score={yourAchievementsStatic.score}
          maxScore={yourAchievementsStatic.maxScore}
          articleScore={yourAchievementsStatic.articleScore}
          quizScore={yourAchievementsStatic.quizScore}
          bestStreak={yourAchievementsStatic.bestStreak}
          streak={yourAchievementsStatic.streak}
          takenQuizzes={takenQuizzesStatic}
        />
      </View>
      {/* TODO: Replace static data with dynamic data once hook is ready */}
      <SavedArticles savedArticles={savedArticlesStatic} />
    </ScrollView>
  );
}
