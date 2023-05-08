import React from 'react';
import {  BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenPerfil } from "../screens";
import { colors } from '../styles/colors';
import { Ionicons } from '@expo/vector-icons'
type TabParamList = {
  Perfil: undefined;
};

type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
  navigation: TabScreenNavigationProp
}
export function TabNavigation() {
  const Tab = createBottomTabNavigator<TabParamList>();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: colors.white,
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white
      }}
    
    >
      <Tab.Screen name="Perfil" component={ScreenPerfil} 
        options={{
          tabBarIcon: () => (<Ionicons name='person' color={colors.white} size={24}/>)
        }}
      
      />
    </Tab.Navigator>
  );
}