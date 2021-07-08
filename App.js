import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginNavigator from './navigation/LoginNavigator';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    //  여기에 로직을 작성한다.
    //  remoteMessage.data로 메세지에 접근가능
    //  remoteMessage.from 으로 topic name 또는 message identifier
    //  remoteMessage.messageId 는 메시지 고유값 id
    //  remoteMessage.notification 메시지와 함께 보내진 추가 데이터
    //  remoteMessage.sentTime 보낸시간
  });

  // Foreground 상태인 경우
  React.useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  });

  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  );
};

export default App;
