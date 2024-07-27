import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={({}) => ({
        headerShown: false,
      })}>
      <Tabs.Screen
        name="quiz"
        options={{
          title: 'Quiz',
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              provider="MaterialIcons"
              name="question-answer"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="articles"
        options={{
          title: 'Articles',
          tabBarIcon: ({ color }) => (
            <TabBarIcon provider="MaterialIcons" name="article" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <TabBarIcon provider="Ionicons" name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ai-assistant"
        options={{
          title: 'Ai-Assistant',
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              provider="MaterialIcons"
              name="assistant"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              provider="FontAwesome6"
              name="circle-user"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
