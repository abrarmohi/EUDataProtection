import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import Mybutton from "../components/Mybutton";

const database = require("../database/database.json");

let screenWidth = Dimensions.get("window").width;

/*
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
        }}
      >

        <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode='contain' />

      
        <Picker
          selectedValue={this.state.country}
          style={styles.picker}
          onValueChange={(value) => {
            this.setState({ country: value });
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

        <TouchableOpacity style={{ margin: 5, borderRadius: 5, overflow: 'hidden' }} onPress={() => (this.state.country !== '') ? this.props.navigation.navigate('Result', { country: this.state.country }) : null}> 
              <Text style={styles.customButton}>
                Submit
              </Text>
        </TouchableOpacity >

        <View style={styles.buttonGroupContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={{ borderRadius: 5, overflow: 'hidden' }} onPress={() => this.props.navigation.navigate("EU Data Law")}> 
              <Text style={styles.customButton}>
                EU Data Law
              </Text>
            </TouchableOpacity >
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={{ borderRadius: 5, overflow: 'hidden' }} onPress={() => this.props.navigation.navigate("First Aid")}> 
              <Text style={styles.customButton}>
                First Aid
              </Text>
            </TouchableOpacity >
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={{ borderRadius: 5, overflow: 'hidden' }} onPress={() => this.props.navigation.navigate("About Us")}> 
              <Text style={styles.customButton}>
                About Us
              </Text>
            </TouchableOpacity >
          </View>
        </View>
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  buttonGroupContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: screenWidth
  },
  buttonContainer: {
    flex: 1,
    margin: 5
  },
  customButton: {
    backgroundColor: '#003299',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    padding: 10,
    textTransform: 'uppercase'
  },
  logo: {
    width: screenWidth
  }
});
*/

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
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.picker}>
          <Picker
            selectedValue={this.state.country}
            onValueChange={(value) => {
              this.setState({ country: value });
              if (value != "" && Platform.OS != "ios") {
                this.props.navigation.navigate("Result", {
                  country: value,
                });
              }
            }}
            itemStyle={{
              fontSize: 16,
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

        {Platform.OS === "ios" && (
          <TouchableOpacity style={styles.picker1}>
            <Mybutton
              title="Submit"
              customClick={() => {
                if (this.state.country != "") {
                  this.props.navigation.navigate("Result", {
                    country: this.state.country,
                  });
                }
              }}
            />
          </TouchableOpacity>
        )}

        <View style={styles.buttonGroupContainer}>
          <TouchableOpacity style={styles.picker1}>
            <Mybutton
              title="EU Data Law"
              customClick={() => this.props.navigation.navigate("EU Data Law")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.picker1}>
            <Mybutton
              title="First Aid"
              customClick={() => this.props.navigation.navigate("First Aid")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.picker1}>
            <Mybutton
              title="About Us"
              customClick={() => this.props.navigation.navigate("About Us")}
            />
          </TouchableOpacity>
        </View>
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
    width: screenWidth - 70,
    marginTop: 17,
    borderWidth: 1,
    fontSize: 7,
    borderRadius: 50,
    borderColor: "#000",
    color: "green",
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 3,
  },
  picker1: {
    marginTop: 17,
    borderWidth: 1,
    fontSize: 7,
    borderRadius: 50,
    borderColor: "#000",
    color: "green",
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 3,
  },
  buttonGroupContainer: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: "3%",
    width: screenWidth,
  },
  logo: {
    width: screenWidth - 70,
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
    top: -30,
  },
});

export default HomeScreen;
