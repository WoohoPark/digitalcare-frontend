import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../component/Home';
import My from '../component/My';
import MapNavigator from './MapNavigator';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="My" component={My} />
            <Tab.Screen name="Map" children={MapNavigator} />
        </Tab.Navigator>
    );
}

export default HomeNavigator;