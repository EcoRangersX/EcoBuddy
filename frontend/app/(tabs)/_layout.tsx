import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import HomeScreen from './index';
import QuizScreen from './quiz';
import ArticlesScreen from './articles';
import AiAssistantScreen from './ai-assistant';
import ProfileScreen from './profile';

const Tabs = createBottomTabNavigator();

export default function TaLayout() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}>
      <Tabs.Screen
        name="Quiz"
        component={QuizScreen}
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
        name="Articles"
        component={ArticlesScreen}
        options={{
          title: 'Articles',
          tabBarIcon: ({ color }) => (
            <TabBarIcon provider="MaterialIcons" name="article" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <TabBarIcon provider="Ionicons" name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Ai-Assistant"
        component={AiAssistantScreen}
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
        name="Profile"
        component={ProfileScreen}
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
    </Tabs.Navigator>
  );
}
