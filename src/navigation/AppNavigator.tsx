import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Briefcase, MessageCircle, User } from 'lucide-react-native';
import { View, Text } from 'react-native';

// Screens (placeholders for now)
import { DashboardScreen } from '../screens/Home/Dashboard';
import { JobsScreen } from '../screens/Jobs/JobsView';
import { CoachScreen } from '../screens/Coach/CoachView';
import { ProfileScreen } from '../screens/Profile/ProfileView';

export type RootTabParamList = {
  Home: undefined;
  Jobs: undefined;
  Coach: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#005B96', // psie-blue-primary
          tabBarInactiveTintColor: '#9CA3AF', // psie-gray-400
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopColor: '#E5E7EB',
            borderTopWidth: 1,
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={DashboardScreen}
          options={{
            tabBarLabel: 'Accueil',
            tabBarIcon: ({ color, size }) => (
              <Home color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Jobs"
          component={JobsScreen}
          options={{
            tabBarLabel: 'Emplois',
            tabBarIcon: ({ color, size }) => (
              <Briefcase color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Coach"
          component={CoachScreen}
          options={{
            tabBarLabel: 'Coach',
            tabBarIcon: ({ color, size }) => (
              <MessageCircle color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profil',
            tabBarIcon: ({ color, size }) => (
              <User color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
