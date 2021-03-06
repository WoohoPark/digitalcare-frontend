import * as React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from '../component/Home';
import Intro from '../component/Intro';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.DefaultTransition,
      }}
      mode="modal">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Intro" component={Intro} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
