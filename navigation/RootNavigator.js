import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import My from '../component/My';
import Noti from '../component/Noti';
import HomeNavigator from './HomeNavigator';
import TopNavigator from './TopNavigator';

const Tab = createBottomTabNavigator();

const RootNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen name="홈" component={HomeNavigator} />
      <Tab.Screen name="TopNavigator" component={TopNavigator} />
      {/* <Tab.Screen name="네이버지도샘플" component={MapNavigator} /> */}
      <Tab.Screen name="Noti" component={Noti} />
      <Tab.Screen name="마이페이지" component={My} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
