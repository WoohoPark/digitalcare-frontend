import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Top1 from '../component/Top1';
import Top2 from '../component/Top2';

const Tab = createMaterialTopTabNavigator();

const TopNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Top1" component={Top1} />
      <Tab.Screen name="Top2" component={Top2} />
    </Tab.Navigator>
  );
};

export default TopNavigator;
