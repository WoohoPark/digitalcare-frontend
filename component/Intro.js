import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

import Header from './Header';
import HeaderMenu from './HeaderMenu';
import MainContainer from './MainContainer';

const Intro = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <HeaderMenu navigation={navigation} />
      <MainContainer />
      <View
        style={{
          flex: 10,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          marginTop: 50,
          marginLeft: 30,
          marginRight: 30,
        }}>
        <Text>
          <Text style={{fontSize: 15}}>개인정보가 유출되셨나요?{'\n'}</Text>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 25}}>
            디지털장의사{'\n'}
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 25}}>
            개인정보케어서비스
          </Text>
          <Text style={{color: 'gray', fontSize: 20}}>를{'\n'}</Text>
          <Text style={{color: 'gray', fontSize: 20}}>신청하세요!{'\n'}</Text>
        </Text>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#1A37B7',
            height: 50,
            borderRadius: 25,
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              color: 'white',
              alignItems: 'space-between',
              justifyContent: 'center',
              fontSize: 20,
            }}>
            상담 신청하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  h_text: {
    padding: 2,
    marginLeft: 20,
    fontSize: 15,
  },
});

export default Intro;
