import React from 'react';
import { StyleSheet, SafeAreaView, Button,Text } from 'react-native';
import { Picker } from '@react-native-picker/picker'

class InputScreen extends React.Component {
  state = {
    country: "germany",
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Picker
          selectedValue={this.state.country}
          style={styles.picker}
          onValueChange={(value) =>
            this.setState({country: value})
        }>
          <Picker.Item label="Austria" value="austria" />
          <Picker.Item label="Belgium" value="belgium" />
          <Picker.Item label="Bulgaria" value="bulgaria" />
          <Picker.Item label="Croatia" value="croatia" />
          <Picker.Item label="Cyprus" value="cyprus" />
          <Picker.Item label="Czech Republic" value="czechRepublic" />
          <Picker.Item label="Denmark" value="denmark" />
          <Picker.Item label="Estonia" value="estonia" />
          <Picker.Item label="Finland" value="finland" />
          <Picker.Item label="France" value="france" />
          <Picker.Item label="Germany" value="germany" />
          <Picker.Item label="Greece" value="greece" />
          <Picker.Item label="Hungary" value="hungary" />
          <Picker.Item label="Ireland" value="ireland" />
          <Picker.Item label="Italy" value="italy" />
          <Picker.Item label="Latvia" value="latvia" />
          <Picker.Item label="Lithuania" value="lithuania" />
          <Picker.Item label="Luxembourg" value="luxembourg" />
          <Picker.Item label="Malta" value="malta" />
          <Picker.Item label="Netherlands" value="netherlands" />
          <Picker.Item label="Norway" value="norway" />
          <Picker.Item label="Poland" value="poland" />
          <Picker.Item label="Portugal" value="portugal" />
          <Picker.Item label="Romania" value="romania" />
          <Picker.Item label="Slovakia" value="slovakia" />
          <Picker.Item label="Slovenia" value="slovenia" />
          <Picker.Item label="Spain" value="spain" />
          <Picker.Item label="Sweden" value="sweden" />
        </Picker>

        <Button
          style={styles.button}
          title="Submit"
          onPress={() =>
            this.props.navigation.navigate("Result", {
              country: this.state.country,
            })
          }
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  picker: {
    justifyContent: "flex-end",
    width: 200,
    height: 50,
    marginBottom: 20,
  },
});

export default InputScreen;
