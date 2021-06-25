import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/navigation/component/login/Login';
import Home from './src/navigation/component/home/Home';
import My from './src/navigation/component/my/My';

import TabNavigator from './src/navigation/TabNavigator';

const Stack = createStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalTransition
        }}
        mode='modal'
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabNavigator" children={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
export default App;