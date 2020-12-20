import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Mybutton from "../components/Mybutton";

import { Picker } from "@react-native-picker/picker";

const database = require("../database/database.json");

class HomeScreen extends React.Component {
  state = {
    country: "",
  };

  render() {
    return (
      <SafeAreaView
        style={styles.container}
        style={{
          flex: 1,
          backgroundColor: "white",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={styles.picker1}>
          <Picker
            selectedValue={this.state.country}
            style={styles.picker}
            onValueChange={(value) => {
              this.setState({ country: value });
              if (value != "") {
                this.props.navigation.navigate("Result", {
                  country: value,
                });
              }
            }}
            itemStyle={{
              backgroundColor: "grey",
              color: "blue",
              fontFamily: "Ebrima",
              fontSize: 17,
            }}
          >
            <Picker.Item label="Pick Country" value="" />
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
        </TouchableOpacity>
        <TouchableOpacity style={styles.picker1}>
          <Mybutton
            title="EU data law"
            customClick={() => this.props.navigation.navigate("EU data law")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.picker1}>
          <Mybutton
            title="First aid"
            customClick={() => this.props.navigation.navigate("First aid")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.picker1}>
          <Mybutton
            title="About us"
            customClick={() => this.props.navigation.navigate("About us")}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  picker: {
    width: "100%",
    alignSelf: "center",
    borderRadius: 15,
    color: "#000",
  },
  picker1: {
    marginTop: 17,
    borderWidth: 1,
    fontSize: 7,
    borderRadius: 50,
    borderColor: "#000",
    width: 300,
    color: "green",
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 3,
  },
});

export default HomeScreen;
