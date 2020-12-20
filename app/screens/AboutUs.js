import { StatusBar } from "expo-status-bar";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  Linking,
} from "react-native";

class AboutUs extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.container1}>
            <View style={styles.container4}>
              <View style={styles.container3}>
                <Text style={styles.textHeader}> MANAGER </Text>
                <Text style={styles.text}>Prof. Dr. Dieter Kopetz</Text>
                <Text
                  style={styles.textLink}
                  onPress={() =>
                    Linking.openURL(
                      "mailto:" + "dieter.kopetz@hochschule-rhein-waal.de"
                    )
                  }
                >
                  dieter.kopetz@hochschule-rhein-waal.de
                </Text>
                <Text style={styles.text}>Friedrich-Heinrich-Allee 25</Text>
                <Text style={styles.text}>47475, Kamp-Lintfort, Germany.</Text>
                <Text
                  style={styles.textLink}
                  onPress={() => Linking.openURL("tel:" + "+49 2842 908 25 0")}
                >
                  +49 2842 908 25 0
                </Text>
              </View>

              <View style={styles.container3}>
                <Text style={styles.textHeader}> DEVELOPERS </Text>
                <Text style={styles.text}>Abdalrahman Elmessiry</Text>
                <Text style={styles.text}>Abrar-Mohi Shafee</Text>
                <Text style={styles.text}>Ahmed Khattab</Text>
                <Text style={styles.text}>Anas Abdulhalim</Text>
                <Text style={styles.text}>Jannik Timmer</Text>
                <Text style={styles.text}>Lakhan-Radhakrishna Vaishnav</Text>
                <Text style={styles.text}>Arzu Yaman</Text>
                <Text style={styles.text}>John-Pingpoh Chokeh</Text>
                <Text style={styles.text}>Maida Sinanovic</Text>
                <Text style={styles.text}>Marie-Luise Speer</Text>
                <Text style={styles.text}>Merve Cura</Text>
                <Text style={styles.text}>Ramazana Omerovic</Text>
                <Text style={styles.text}>Seyda Simsek</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mainColor = "#000";
const mainColor1 = "#003399";
//const mainColor = "#fff";
const tertColor = "#fff";
//const tertColor = "#000";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tertColor,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  container1: {
    backgroundColor: tertColor,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexWrap: "wrap",
    paddingTop: 27,
    paddingLeft: 27,
    paddingRight: 27,
  },
  container2: {
    backgroundColor: tertColor,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  container4: {
    backgroundColor: tertColor,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    width: "100%",
  },
  container3: {
    backgroundColor: tertColor,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  flagBox: {
    backgroundColor: mainColor,
    padding: 2,
    borderRadius: 3,
    alignSelf: "flex-start",
  },
  textHeader2: {
    borderRadius: 7,
    fontSize: 16,
    borderWidth: 1,
    backgroundColor: tertColor,
    borderColor: mainColor,
    color: mainColor,
    fontWeight: "bold",
  },
  textHeader: {
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 7,
    fontSize: 16,
    borderWidth: 1,
    backgroundColor: tertColor,
    borderColor: mainColor,
    color: mainColor,
    fontWeight: "bold",
  },
  textHeader1: {
    marginTop: 17,
    borderRadius: 7,
    fontSize: 20,
    borderWidth: 1,
    backgroundColor: tertColor,
    borderColor: mainColor,
    color: mainColor,
    fontWeight: "bold",
  },
  textShort: {
    marginLeft: 3,
    maxWidth: 117,
    color: mainColor,
    fontSize: 16,
  },
  text: {
    marginLeft: 3,
    color: mainColor,
    fontSize: 16,
  },
  textLink: {
    marginLeft: 3,
    color: mainColor1,
    fontSize: 16,
  },
  text1: {
    marginLeft: 3,
    color: mainColor,
    fontSize: 20,
  },
  headline: {
    color: mainColor,
    width: 137,
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default AboutUs;
