import { ScrollView, View } from 'react-native';
import LeaderboardUserList from '@/components/leaderboard/LeaderboardUserList';
import YourAchievementsSection from '@/components/YourAchievementsSection';
import {
  takenQuizzesStatic,
  leaderboardUsersStatic,
} from '@/constants/StaticData';
import UserProfileHeader from '../quizzes/UserProfileHeader';
import { userProfileHeaderStatic, yourAchievementsStatic } from '@/constants/StaticData';

export default function LeaderboardTab() {
  return (
    <ScrollView>
      <UserProfileHeader
        username={userProfileHeaderStatic.username}
        profile_image_url={userProfileHeaderStatic.profile_image_url}
        level={userProfileHeaderStatic.level}
        stars={userProfileHeaderStatic.stars}
        id={userProfileHeaderStatic.id}
      />
      <View className="p-3">
        <YourAchievementsSection
          streak={yourAchievementsStatic.streak}
          bestStreak={yourAchievementsStatic.bestStreak}
          quizScore={yourAchievementsStatic.quizScore}
          articleScore={yourAchievementsStatic.articleScore}
          score={yourAchievementsStatic.score}
          maxScore={yourAchievementsStatic.maxScore}
          takenQuizzes={takenQuizzesStatic}
        />
        <LeaderboardUserList users={leaderboardUsersStatic} />
      </View>
    </ScrollView>
  );
}
