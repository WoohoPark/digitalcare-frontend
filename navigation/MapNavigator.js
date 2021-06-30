import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Map from '../component/Map';
import MapDetail from '../component/MapDetail';

const Stack = createStackNavigator();

const MapNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Map"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                cardOverlayEnabled: true,
                ...TransitionPresets.DefaultTransition
            }}
            mode='modal'
        >
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="MapDetail" component={MapDetail} />
        </Stack.Navigator>
    );
}

export default MapNavigator;