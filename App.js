/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomePage from './components/HomePage.js';
import SettingsPage from './components/SettingsPage.js';
import TaskAdd from './components/TaskAdd.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Task from './data/Task';
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomePage} 
        initialParams={{
          doneList: [],
          unDoneList: [],
        }}
        />
        <Drawer.Screen name="TaskAdd" component={TaskAdd} />

        <Drawer.Screen name="Settings" component={SettingsPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({

})
