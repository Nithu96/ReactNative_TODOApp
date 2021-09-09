import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Styles from '../style/TaskStyle';
import edit from '../assets/edit.png';

const Task = (props) => {

  return (
    <View style={Styles.body}>
      <View style={Styles.taskView}>
        <View >
            <Image source={edit}  style={Styles.editImg}/>
        </View>
        <Text style={Styles.itemText}>{props.text}</Text>
      </View>
      <View style={Styles.deleteBtn}></View>
    </View>
  )
}

export default Task;