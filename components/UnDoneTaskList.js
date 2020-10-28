import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import TaskComponent from './TaskComponent';
const UnDoneTaskList = ({ route, navigation }) => {
    const { doneList, unDoneList } = route.params;
console.log('unDoneList :');
console.log(unDoneList);
    return (
        <View>
            <FlatList data={unDoneList}
                renderItem={({ item }) =>
                    <TaskComponent name={item.name}
                        description={item.des}
                        isDone={item.isDone}
                    />
                }
                keyExtractor={item => item.id} />
        </View>
    )
}
export default UnDoneTaskList;
