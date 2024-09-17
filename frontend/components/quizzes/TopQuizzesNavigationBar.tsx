import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LeaderboardTab from '@/components/leaderboard/LeaderboardTab';
import BadgesScreen from '@/components/badges/BadgesTab';
import QuizTab from '../quiz/QuizTab';
import {
  QuizTabIcon,
  BadgesTabIcon,
  LeaderboardTabIcon,
} from '../icons/QuizzesIcons';

const TopTab = createMaterialTopTabNavigator();

export default function TopQuizzesNavigationBar() {
  return (
    <TopTab.Navigator
      initialRouteName="Quiz"
      screenOptions={{
        tabBarActiveTintColor: '#73db8a',
        tabBarInactiveTintColor: '#000',
        tabBarItemStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          textTransform: 'none',
        },
        tabBarStyle: { backgroundColor: '#fff' },
        tabBarIndicatorStyle: { backgroundColor: '#73db8a' },
      }}>
      <TopTab.Screen
        name="Quiz"
        component={QuizTab}
        options={{
          title: 'Quiz',
          tabBarIcon: ({ focused }) => (
            <QuizTabIcon focused={focused} size={20} />
          ),
        }}
      />
      <TopTab.Screen
        name="Leaderboard"
        component={LeaderboardTab}
        options={{
          title: 'Leaderboard',
          tabBarIcon: ({ focused }) => (
            <LeaderboardTabIcon focused={focused} size={20} />
          ),
        }}
      />
      <TopTab.Screen
        name="Badges"
        component={BadgesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <BadgesTabIcon focused={focused} size={22} />
          ),
        }}
      />
    </TopTab.Navigator>
  );
}
