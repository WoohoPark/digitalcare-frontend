import * as React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Login from '../component/Login';
import RootNavigator from './RootNavigator';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalTransition,
      }}
      mode="modal">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RootNavigator" component={RootNavigator} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
