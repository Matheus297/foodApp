import React from 'react';
import {View, Image, TouchableHighlight} from 'react-native';
import {createBottomTabNavigator, BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Like from '../pages/Like';
import User from '../pages/User';

import CustomTab from '../components/CustomTab'


const Tab = createBottomTabNavigator();


const Tabs = () => {

    return (
        <Tab.Navigator
            tabBar={props => <CustomTab {...props} />}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                
            />

            <Tab.Screen
                name="Search"
                component={Search}
                
            />  

            <Tab.Screen
                name="Like"
                component={Like}
               
            />

            <Tab.Screen
                name="User"
                component={User}
            />
        </Tab.Navigator>
    )
}

export default Tabs;