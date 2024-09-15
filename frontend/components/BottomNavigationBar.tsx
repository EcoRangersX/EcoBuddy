import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

const BottomNavigationBar = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={({}) => ({
        headerShown: false,
      })}>
      <Tabs.Screen
        name="quizzes/index"
        options={{
          title: 'Quizzes',
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
      <Tabs.Screen name="quizzes/[id]" options={{ href: null }} />
      {/* <Tabs.Screen name="articles/[id]" options={{ href: null }} /> Add once the Article Page is developing */}
      <Tabs.Screen name="settings" options={{ href: null }} />
      <Tabs.Screen name="aqi-details" options={{ href: null }} />
    </Tabs>
  );
};

export { BottomNavigationBar };
