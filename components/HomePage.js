import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DoneTaskList from './DoneTaskList.js';
import UnDoneTaskList from './UnDoneTaskList';

const HomePage = ({ route, navgation }) => {
    const {doneList, unDoneList } = route.params;
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name='Done' component={DoneTaskList}
            initialParams={ {doneList :doneList} }>

            </Tab.Screen>
            <Tab.Screen name='UnDone' component={UnDoneTaskList}
            initialParams={ {unDoneList :unDoneList} }>

            </Tab.Screen>
        </Tab.Navigator>
    )
}
export default HomePage;