import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const colorsPage = Colors[colorScheme==='light' ? 'light':'dark'];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorsPage.tabIconSelected,
        tabBarInactiveTintColor: colorsPage.tabIconDefault,
        headerShown: false,
        tabBarStyle: {
            backgroundColor: colorsPage.tint,
        }
      }}>
       <Tabs.Screen
        name="past"
        options={{
          title: 'Résultats',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name='hourglass' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name='home' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendrier"
        options={{
          title: 'Futurs Matchs',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name='calendar' color={color} />
          ),
        }}
      />
      
    </Tabs>
  );
}
