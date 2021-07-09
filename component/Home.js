import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  BackHandler,
  Image,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import Header from './Header';
import HeaderMenu from './HeaderMenu';
import MainContainer from './MainContainer';

const Home = ({navigation}) => {
  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        Alert.alert('Hold on!', '앱을 종료하시겠습니까?', [
          {
            text: '취소',
            onPress: () => null,
          },
          {text: '확인', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Header />
      <HeaderMenu navigation={navigation} />
      <MainContainer />
      <View
        style={{
          flex: 1.5,
          flexDirection: 'row',
          marginTop: 20,
          marginLeft: 30,
          marginRight: 30,
          marginBottom: 5,
        }}>
        <Text>
          <Text style={{color: '#F7A100', fontSize: 15, height: 15}}>
            클리어 미션
          </Text>
          <Text style={{fontSize: 10, color: '#BDBCC1'}}>
            {' '}
            각 커뮤니티 사이트에 올려진{' '}
          </Text>
          <Text style={{color: '#141C5E', fontSize: 10}}>
            개인정보를 지워드립니다.{'\n'}
          </Text>
          <Text style={{fontSize: 10, color: '#BDBCC1', marginTop: 30}}>
            각 커뮤니티 사이트에 올려진 게시물 중 삭제된 게시물 수 입니다.{'\n'}
            디지털장의사는 투명하게 여러분의 개인정보를 지켜드리겠습니다.
          </Text>
        </Text>
      </View>
      <View style={{flex: 1.5, flexDirection: 'row', backgroundColor: 'white'}}>
        <View style={{width: '60%', flexDirection: 'row', flexWrap: 'wrap'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 30,
              height: 30,
              width: 30,
              shadowRadius: 2,
              marginLeft: 10,
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 30,
              height: 30,
              width: 30,
              shadowRadius: 2,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text>트위터</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 30,
              height: 30,
              width: 30,
              shadowRadius: 2,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text>더쿠넷</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 30,
              height: 30,
              width: 30,
              shadowRadius: 2,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text>디씨인사이드</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 30,
              height: 30,
              width: 30,
              shadowRadius: 2,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text>일베</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 30,
              height: 30,
              width: 30,
              shadowRadius: 2,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text>페이스북</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 30,
              height: 30,
              width: 30,
              shadowRadius: 2,
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text>기타</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Text
              style={{
                color: 'white',
                backgroundColor: '#1A37B7',
                width: 120,
                marginLeft: 5,
                marginRight: 5,
                borderRadius: 10,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              전체 누적 삭제률
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: '#FCB541', marginTop: 20}}>
        <TouchableOpacity>
          <Text>
            <Text
              style={{
                color: 'white',
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                OOO
              </Text>
              님의 링크삭제요청(제거/전체)
            </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              1/10
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 6, flexDirection: 'row', flexWrap: 'wrap'}}>
        <TouchableOpacity style={{width: '50%', height: '50%'}}>
          <Text style={{marginTop: 10, marginLeft: 7, fontWeight: 'bold'}}>
            상담신청하기
          </Text>
          <Text style={{marginTop: 8, marginLeft: 7}}>
            개인정보삭제 {'\n'}
            인터넷게시물삭제{'\n'}
            사망후데이터 삭제
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'gray', width: '50%', height: '50%'}}>
          <Text style={{marginTop: 10, marginLeft: 7, fontWeight: 'bold'}}>
            삭제요청하기
          </Text>
          <Text style={{marginTop: 8, marginLeft: 7}}>
            인스타그램,트위터, {'\n'}
            페이스북 등 신상도용,{'\n'}
            불법촬영된동영상
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'gray', height: '50%', width: '50%'}}>
          <Text style={{marginTop: 10, marginLeft: 7, fontWeight: 'bold'}}>
            전화하기
          </Text>
          <Text style={{marginTop: 8, marginLeft: 7}}>
            잊혀질 권리를 최우선으로 {'\n'}
            생각합니다.{'\n'}
            권리침해, 리벤지포르노 상응
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: '50%', width: '50%'}}>
          <Text style={{marginTop: 10, marginLeft: 7, fontWeight: 'bold'}}>
            전화하기
          </Text>
          <Text style={{marginTop: 8, marginLeft: 7}}>
            잊혀질 권리를 최우선으로 {'\n'}
            생각합니다.{'\n'}
            권리침해, 리벤지포르노 상담
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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  h_text: {
    padding: 2,
    marginLeft: 20,
    fontSize: 15,
  },
});

export default Home;
