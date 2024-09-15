import { ScrollView } from 'react-native';
import LeaderbordSection from '../leaderboard/LeaderboardSection';
import { leaderboardUsersStatic } from '@/constants/StaticData';

export default function LeaderboardScreen() {
  return (
    <ScrollView>
      <LeaderbordSection users={leaderboardUsersStatic} />
    </ScrollView>
  );
}
