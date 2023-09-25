import Constants from "expo-constants";
import {apiUser} from '../';
import { Alert, Platform } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { AxiosError } from "axios";


export interface IExtra {
  eas:{
    projectId: string
  }
}
export async function registerForPushNotificationsAsync() {
  let token;
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name:'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Alert.alert('Falha ao obter o token para envio de mensagens Push');
    }
    const extra = Constants.expoConfig?.extra as IExtra
    token = (await Notifications.getExpoPushTokenAsync({
      projectId: extra.eas.projectId,
    }));
    try {
        await apiUser.updateToken(token.data);
    } catch (error) {
        const err=error as AxiosError
        console.log (err.response?.data)
    }
    
  } else {
    alert('Você deve ter um dispositivo físico para receber notificações Push');
  }

  return token;
}