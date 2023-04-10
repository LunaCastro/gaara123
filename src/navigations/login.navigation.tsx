import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreenCadastro, ScreenLogin } from "../screens";
type LoginStackParamList = {
  Login: undefined
  Cadastro: undefined
};
type LoginScreenNavigation = StackNavigationProp< LoginStackParamList, 'Login'>
export type LoginTypes={
  navigation: LoginScreenNavigation
}


export function LoginNavigation() {
  const Stack = createStackNavigator<LoginStackParamList>();
  return (
    <Stack.Navigator>
       <Stack.Screen name="Cadastro" component={ScreenCadastro} />
      <Stack.Screen name="Login" component={ScreenLogin} />
     
    </Stack.Navigator>
  );
}