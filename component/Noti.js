import React, {useCallback} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const Noti = ({navigation}) => {
  const getFcmToken = useCallback(async () => {
    const fcmToken = await messaging().getToken();
    await Alert.alert(fcmToken);
    console.log(fcmToken);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity title="get Token!!" onPress={getFcmToken}>
        <Text>notification</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topLine: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleLine: {
    flex: 12,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomLine: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Noti;
