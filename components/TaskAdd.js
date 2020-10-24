import React, { useState } from 'react';
import { Text, View, StyleSheet, Switch, Button ,TextInput} from 'react-native';
import Task from '../data/Task';


{/* <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setTaskName(text)}
                    value={taskName}
                /> <TextInput
                    style={{ height: 60, borderColor: '#fff', borderWidth: 3 }}
                    onChangeText={text => setTaskDes(text)}
                    value={taskDes}
                /> */}


const TaskAdd = () => {
    const [taskName, setTaskName] = useState();
    const [taskDes, setTaskDes] = useState();
    const [isDone, setIsDone] = useState(false);
    const toggleSwitch = () => setIsDone(!isDone);
    const TaskList = new Array();
    const task = new Task(taskName,taskDes,isDone);
   
    return (
        <View style={styles.mainFrame}>
            <View>
                <Text>TASK Name: </Text>
                <Text>Description: </Text>
                <Text>situation: </Text>
            </View>
            <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    value={taskName}
                    onChangeText={text => setTaskName(text)}
                /><TextInput
                    style={{ height: 60, borderColor: '#fff', borderWidth: 3 }}
                    value={taskDes}

                    onChangeText={text => setTaskDes(text)}
                />

                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isDone ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isDone}
                >

                </Switch>
                
            </View>
            <Button title='submit' 
            onPress={()=>{TaskList.push(task)}}></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    mainFrame: {
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        flexDirection: 'row',

    }
})
export default TaskAdd;