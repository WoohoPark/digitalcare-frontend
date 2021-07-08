import * as React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import My from '../component/My';

const Stack = createStackNavigator();

const MyNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="My"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.DefaultTransition,
      }}
      mode="modal">
      <Stack.Screen name="My" component={My} />
    </Stack.Navigator>
  );
};

export default MyNavigator;
