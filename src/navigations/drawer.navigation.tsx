import React from 'react';
import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenPerfil } from "../screens";
import { colors } from '../styles/colors';
import { Ionicons } from '@expo/vector-icons'
type DrawerParamList = {
  Perfil: undefined;
};

type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Perfil'>
export type DrawerTypes = {
  navigation: DrawerScreenNavigationProp
}
export function DrawerNavigation() {
  const Drawer = createDrawerNavigator<DrawerParamList>();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle:{
          backgroundColor: colors.primary
        },
        drawerActiveTintColor: colors.white
      }}
    
    >
      <Drawer.Screen name="Perfil" component={ScreenPerfil} 
        options={{}}
      
      />
    </Drawer.Navigator>
  );
}