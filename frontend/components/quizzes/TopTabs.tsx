import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BadgesScreen from './Badges';
import LeaderboardScreen from './Leaderboard';

const TopTab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <TopTab.Navigator initialRouteName='Leaderboard'>
      <TopTab.Screen name="Leaderboard" component={LeaderboardScreen} />
      <TopTab.Screen name="Badges" component={BadgesScreen} />
    </TopTab.Navigator>
  );
}
