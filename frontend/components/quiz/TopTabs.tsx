import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LeaderboardTab from '@/components/leaderboard/LeaderboardTab';
import BadgesScreen from '@/components/badges/BadgesTab';
import QuizTab from './QuizTab';

const TopTab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <TopTab.Navigator initialRouteName='Quiz'>
      <TopTab.Screen name="Quiz" component={QuizTab} />
      <TopTab.Screen name="Leaderboard" component={LeaderboardTab} />
      <TopTab.Screen name="Badges" component={BadgesScreen} />
    </TopTab.Navigator>
  );
}
