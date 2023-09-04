import React from'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';
import { LoginNavigation } from './login.navigation';
import { TabNavigation } from './tab.navigation';
export function Navigation() {
  const { user } = useAuth();
 
  return (
    <NavigationContainer>
      {user?.token ? <TabNavigation/> : <LoginNavigation/>}
    </NavigationContainer>
  );
}