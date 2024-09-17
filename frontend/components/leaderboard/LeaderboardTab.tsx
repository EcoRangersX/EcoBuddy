import { ScrollView, View } from 'react-native';
import LeaderboardUserList from '@/components/leaderboard/LeaderboardUserList';
import YourAchievementsSection from '@/components/YourAchievementsSection';
import {
  takenQuizzesStatic,
  leaderboardUsersStatic,
} from '@/constants/StaticData';
import UserProfileHeader from '../quizzes/UserProfileHeader';

export default function LeaderboardTab() {
  return (
    <ScrollView>
      <UserProfileHeader
        username="lgfdsgsdfgfdsa3"
        profile_image_url="https://images.hdqwalls.com/download/horizon-forbidden-west-2020-gy-3840x2160.jpg"
        level="advanced"
        stars={302}
      />
      <View className="p-3">
        <YourAchievementsSection
          streak={1}
          bestStreak={11}
          quizScore={1933}
          articleScore={1522}
          score={3455}
          maxScore={10000}
          takenQuizzes={takenQuizzesStatic}
        />
        <LeaderboardUserList users={leaderboardUsersStatic} />
      </View>
    </ScrollView>
  );
}
