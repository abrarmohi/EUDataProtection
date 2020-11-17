import React from 'react';
import { StyleSheet, SafeAreaView, Button,Text } from 'react-native';
import { Picker } from '@react-native-picker/picker'

class InputScreen extends React.Component {
  state = {
    country: 'germany'
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>hhh</Text>
        <Picker
          selectedValue={this.state.country}
          style={styles.picker}
          onValueChange={(value) =>
            this.setState({country: value})
        }>
          <Picker.Item label="Germany" value="germany" />
          <Picker.Item label="Denmark" value="denmark" />
        </Picker>
        
        <Button style={styles.button} title="Submit" onPress={() => this.props.navigation.navigate('Result', { country: this.state.country })} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    picker: {
      justifyContent: "flex-end",
      width: 200,
      height: 50,
      marginBottom: 20
    },
});

export default InputScreen