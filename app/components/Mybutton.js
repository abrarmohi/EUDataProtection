/*Custom Button*/
import React from "react";
//import props from'prop-types';
import { TouchableOpacity, Text, StyleSheet } from "react-native";
const Mybutton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    color: "#ffffff",
    padding: 10,
    borderRadius: 15,
    borderWidth: 0,
    borderColor: "#000",
    fontSize: 14,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    color: "#000",
  },
});
export default Mybutton;
