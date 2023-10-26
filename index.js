/**
 * @format
 */

import { AppRegistry } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import { name as appName } from './app.json';

messaging().subscribeToTopic('csjucalerta').then(() => {
  console.log('Nueva noticia de VAP');
})
messaging().subscribeToTopic('csjucalertainformatico').then(() => {
  console.log('Nueva noticia de VAP');
})
messaging().setBackgroundMessageHandler(async remoteMessage => {
  showNotification(remoteMessage.notification?.title || 'CSJUC', remoteMessage.notification?.body || 'Tienes una alerta de soporte')
});

AppRegistry.registerComponent(appName, () => App);
