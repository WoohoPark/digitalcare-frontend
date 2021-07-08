import * as React from 'react';
import {Text, View, Alert, Image} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <Image
        style={{
          width: 30,
          height: 30,
        }}
        source={{
          uri: 'https://image.shutterstock.com/image-vector/notification-icon-vector-material-design-260nw-759841507.jpg',
        }}
        onPress={() => {
          Alert.alert('notice');
        }}
      />
      <Text style={{}}>디지털장의사 개인정보케어서비스</Text>
    </View>
  );
};

export default Header;
