import React, { useState } from 'react';
import { Text, View, StyleSheet, Switch, Button, TextInput } from 'react-native';
import Task from '../data/Task';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';


{/* <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setTaskName(text)}
                    value={taskName}
                /> <TextInput
                    style={{ height: 60, borderColor: '#fff', borderWidth: 3 }}
                    onChangeText={text => setTaskDes(text)}
                    value={taskDes}
                /> */}


const TaskAdd = ({ navigation }) => {
    const [id,setId] =useState(nanoid(5));
    const [count, setCount] = useState(0);
    const [taskName, setTaskName] = useState();
    const [taskDes, setTaskDes] = useState();
    const [isDone, setIsDone] = useState(false);
    const toggleSwitch = () => setIsDone(!isDone);

    const [doneTaskList, setDoneTaskData] =useState([]) ;
    const [unDoneTaskList, setUnDoneTaskData] = useState([]);
    const changeId= () => {
        setId(nanoid())
    }
    return (
        <View style={styles.container}>
            <View style={styles.mainFrame}>

                <Text style={styles.taskNameText}>Task Name   </Text>
                <TextInput
                    style={styles.taskNameTextInput}
                    value={taskName}
                    onChangeText={text => setTaskName(text)}
                />
                <Text style={styles.taskDesText}>Description </Text>
                <TextInput
                    style={styles.taskDesTextInput}
                    value={taskDes}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={text => setTaskDes(text)}
                />
                <View style={styles.switchContainer}>
                    <Text style={styles.switchText}>isDone  </Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isDone ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={isDone}
                    />

                </View>




            </View>
            <Button title='submit'
                onPress={() => {
                    const task = new Task(id, taskName, taskDes, isDone);
                    
                    if (task.isDone) {
                        doneTaskList.push(task);
                        //setDoneTaskData(doneTaskList);
                        console.log(doneTaskList);
                        changeId();
                        //console.log({doneTaskList});
                        navigation.navigate('Home' ,{
                            screen: 'Done', params:{
                                doneList:doneTaskList
                            } 
                        })
                    } else {
                        unDoneTaskList.push(task);
                        changeId();
                        navigation.navigate('Home', {
                            screen: 'UnDone', params: {
                                unDoneList:unDoneTaskList,
                                doneList :doneTaskList
                            }
                        })
                    }
                }}
            ></Button>
        </View >

    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
    },
    mainFrame: {
        justifyContent: 'flex-start',
        alignContent: 'flex-start',


    },
    taskNameText: {
        marginVertical: 10,
        fontWeight: 'bold'

    },
    taskNameTextInput: {
        borderColor: 'gray',
        borderWidth: 2
    },
    taskDesText: {
        marginVertical: 10,
        fontWeight: 'bold'

    },
    taskDesTextInput: {
        alignItems: 'flex-start',
        textAlignVertical: 'top',
        borderColor: 'gray',
        borderWidth: 2
    },
    switchContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between'
    },
    switchText: {
        fontWeight: 'bold'
    },


})
export default TaskAdd;