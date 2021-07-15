import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginNavigator from './navigation/LoginNavigator';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

const App = () => {
  //Foreground Firebase Message
  React.useEffect(() => {
    messaging()
      .requestPermission()
      .then(authStatus => {
        if (
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL
        ) {
          messaging()
            .getToken()
            .then(token => {
              console.log('getToken()' + token);
            });

          messaging().onTokenRefresh(token => {
            console.log('refreshToken()' + token);
          });

          messaging().onMessage(async remoteMessage => {
            console.log('foground', remoteMessage);
            Alert.alert(
              remoteMessage.notification.title,
              remoteMessage.notification.body,
            );
          });
        }
      })
      .catch(err => {
        console.log('error message permission');
      });
  });

  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  );
};

export default App;
