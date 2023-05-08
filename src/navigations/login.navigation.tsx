import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreenCadastro, ScreenLogin } from "../screens";
import { TabNavigation } from './tab.navigation';
import{DrawerNavigation} from './drawer.navigation'
type LoginStackParamList = {
  Login: undefined
  Cadastro: undefined
  Tab: undefined
  Drawer:undefined
};
type LoginScreenNavigation = StackNavigationProp< LoginStackParamList, 'Login'>
export type LoginTypes={
  navigation: LoginScreenNavigation
}


export function LoginNavigation() {
  const Stack = createStackNavigator<LoginStackParamList>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="Cadastro" component={ScreenCadastro} />
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
     
    </Stack.Navigator>
  );
}