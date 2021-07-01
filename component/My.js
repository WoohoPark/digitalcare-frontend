import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import RNKakaoLogins from 'react-native-kakao-logins';

const My = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
          RNKakaoLogins.logout((err, result) => {
            if (err) {
              Alert.alert('error', err.toString);
            }
            console.log(`${result}`);
          });
        }}
        title="카카오 로그아웃"
        style={styles.kakaoLoginBtn}>
        <Text style={styles.kakaoLoginText}>카카오 로그아웃</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MapNavigator');
        }}
        title="카카오 로그아웃"
        style={styles.kakaoLoginBtn}>
        <Text style={styles.kakaoLoginText}> 맵으로 이동잏</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        title="카카오 로그아웃"
        style={styles.kakaoLoginBtn}>
        <Text style={styles.kakaoLoginText}>바텀에서 집으로가야쥬</Text>
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

export default My;
