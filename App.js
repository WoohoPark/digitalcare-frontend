import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './component/Login';

import TabNavigator from './navigation/TabNavigator';

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