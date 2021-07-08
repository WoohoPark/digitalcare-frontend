import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';

import Header from './Header';
import HeaderMenu from './HeaderMenu';
import MainContainer from './MainContainer';

const My = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <HeaderMenu navigation={navigation} />
      <MainContainer />
      <View
        style={{
          flex: 10,
          marginTop: 20,
        }}>
        <Text>여긴어디?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default My;
