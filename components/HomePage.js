import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DoneTaskList from './DoneTaskList.js';
import UnDoneTaskList from './UnDoneTaskList';

const Home = () => {
const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name='Done' component={DoneTaskList}>

            </Tab.Screen>
            <Tab.Screen name='UnDone' component={UnDoneTaskList}>

            </Tab.Screen>
        </Tab.Navigator>
    )
}
export default Home;