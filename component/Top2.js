import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';

const Top2 = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('My');
        }}
        title="카카오 로그아웃"
        style={styles.kakaoLoginBtn}>
        <Text style={styles.kakaoLoginText}>테스트용 마이</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        title="카카오 로그아웃"
        style={styles.kakaoLoginBtn}>
        <Text style={styles.kakaoLoginText}> Top2Top2Top2Top2Top2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        title="카카오 로그아웃"
        style={styles.kakaoLoginBtn}>
        <Text style={styles.kakaoLoginText}>로그인으로가자</Text>
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

export default Top2;
