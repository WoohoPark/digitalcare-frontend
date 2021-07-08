import * as React from 'react';
import {
  Text,
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const HeaderMenu = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Intro');
        }}>
        <Text style={styles.h_text}>서비스소개</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('삭제사례');
        }}>
        <Text style={styles.h_text}>삭제사례</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('상담신청');
        }}>
        <Text style={styles.h_text}>상담신청</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('고객센터');
        }}>
        <Text style={styles.h_text}>고객센터</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  h_text: {
    padding: 2,
    marginLeft: 20,
    fontSize: 15,
  },
});

export default HeaderMenu;
