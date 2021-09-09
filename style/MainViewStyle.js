import {Dimensions} from 'react-native';

const React = require('react-native');
const {width: WIDTH, height: height} = Dimensions.get('window');
const {StyleSheet} = React;


module.exports = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    bodyView: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color:'#00008b'
    },
    items: {
      marginTop: 30,
    },
    addTaskTest: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    taskAdd: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#00008b',
      borderWidth: 3,
      width: 250,
    },
    circleBtn: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#00008b',
      borderWidth: 6,
    },
    plusBtn: {
      fontSize: 25,
      fontWeight: 'bold',
      color:'#000000'
    },
  });