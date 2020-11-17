/*Custom Button*/
import React from 'react';
//import props from'prop-types';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
const Mybutton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#08146e',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  text: {
    color: '#ffffff',
  },
});
export default Mybutton;
