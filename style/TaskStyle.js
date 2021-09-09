import {Dimensions} from 'react-native';

const React = require('react-native');
const {width: WIDTH, height: height} = Dimensions.get('window');
const {StyleSheet} = React;

module.exports = StyleSheet.create({
    body: {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    taskView: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    editImg: {
      width: 20,
      height: 20,
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    itemText: {
      maxWidth: '80%',
    },
    deleteBtn: {
      width: 12,
      height: 12,
      borderColor: '#ff0000',
      borderWidth: 2,
      borderRadius: 5,
    },
  });