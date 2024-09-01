import { ScrollView, View } from 'react-native';
import LeaderboardUserList from '@/components/leaderboard/LeaderboardUserList';
import YourAchievementsSection from '@/components/YourAchievementsSection';
import {
  takenQuizzesStatic,
  leaderboardUsersStatic,
} from '@/constants/StaticData';

export default function Leaderboard() {
  return (
    <ScrollView>
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
