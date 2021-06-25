import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './component/home/Home';
import My from './component/my/My';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="My" component={My} />
        </Tab.Navigator>

    );
}

export default TabNavigator;