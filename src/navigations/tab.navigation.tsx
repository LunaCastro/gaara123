import React from 'react';
import {  BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenPerfil, ScreenCamera, ScreenLocation } from "../screens";
import { colors } from '../styles/colors';
import { Entypo } from '@expo/vector-icons'; 

import { Ionicons } from '@expo/vector-icons'
type TabParamList = {
  Perfil: undefined;
  Camera: undefined
  Location: undefined
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
        tabBarActiveTintColor: colors.third
      }}
    
    >
      <Tab.Screen name="Perfil" component={ScreenPerfil} 
        options={{
          tabBarIcon: () => (<Ionicons name='person' color={colors.black} size={24}/>)
        }}
      
      />
      <Tab.Screen name="Camera" component={ScreenCamera}
       options={{
        tabBarIcon: () => (<Ionicons name="camera" colors={colors.white} size={24} />)
      }}
      />  
      <Tab.Screen name="Location" component={ScreenLocation}
      options={{
       tabBarIcon: () => (<Entypo name="location-pin" size={24} color="black" />)
     }}
     />
    </Tab.Navigator>
  );
}