import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Delivery from './pages/Delivery';
import Restaurant from './pages/Restaurant';

import Tabs from './navigation/tabs';

const Stack = createStackNavigator();


export default () => {
    return (
        <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Home"
        >
            <Stack.Screen 
                name="Home"
                component={Tabs}
            />
            <Stack.Screen 
                name="Delivery"
                component={Delivery}
            />
            <Stack.Screen 
                name="Restaurant"
                component={Restaurant}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
}