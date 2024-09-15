import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LeaderboardScreen from '@/app/(tabs)/leaderboard';
import BadgesScreen from '@/app/(tabs)/badges';

const TopTab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <TopTab.Navigator initialRouteName='Leaderboard'>
      <TopTab.Screen name="Leaderboard" component={LeaderboardScreen} />
      <TopTab.Screen name="Badges" component={BadgesScreen} />
    </TopTab.Navigator>
  );
}
