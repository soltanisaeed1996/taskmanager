import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import TaskComponent from './TaskComponent';
const DoneTaskList = ({ route, navigation }) => {
   

    const { doneList } = route.params;
    console.log("--------------------------");
    console.log(doneList);
    console.log("-------------------------");
    return (
        <View>
            <FlatList
                data={doneList}
                renderItem={({ item }) =>
                    <TaskComponent name={item.name}
                    description={item.des}
                    isDone={item.isDone} />
                }
                keyExtractor={item => item.id}


            />
        </View>
    )
}
export default DoneTaskList;
