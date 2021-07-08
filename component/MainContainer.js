import * as React from 'react';
import {Text, View, Alert, Image} from 'react-native';

const MainContainer = () => {
  return (
    <View
      style={{
        flex: 2,
        backgroundColor: '#141C5E',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 17,
          fontWeight: 'bold',
          flexWrap: 'wrap',
          marginVertical: 4,
          marginBottom: 4,
          marginLeft: 30,
          marginRight: 30,
        }}>
        온라인에 떠도는 당신의 개인정보를 지워드립니다
      </Text>
    </View>
  );
};

export default MainContainer;
