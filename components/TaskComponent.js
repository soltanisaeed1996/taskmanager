import React, { useState } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';

const TaskComponent = ( props ) => {
    const [isDone, setIsDone] = useState(props.isDone);
    const toggleSwitch = () => setIsDone(!isDone);

    return (
        <View style={styles.mainFrame}>
            <View>
                <Text>TASK Name  </Text>
                <Text>{props.name} </Text>
            
                <Text>Description </Text>
                <Text>{props.description} </Text>

                <Text>isDone </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isDone ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isDone}
                />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainFrame: {
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        borderWidth:4,
        borderRadius:3,
        borderColor:'#000',
        padding:4,


    }
})
export default TaskComponent;