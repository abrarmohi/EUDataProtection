import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Linking } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Flag } from "react-native-svg-flagkit";

const database = require("../database/database.json");

class ResultScreen extends React.Component {
  render() {
    const country = database.country[this.props.route.params.country];
    this.props.navigation.setOptions({ title: country.name });

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.container1}>
            <View style={styles.container2}>
              <Text numberOfLines={1} style={styles.headline}>
                {country.name.toUpperCase()}
              </Text>
              <View style={styles.container3}>
                <Text style={styles.textHeader2}> CAPITAL </Text>
                <Text style={styles.textShort}>{country.capital}</Text>
              </View>
              <View style={styles.container3}>
                <Text style={styles.textHeader2}> POPULATION </Text>
                <Text style={styles.textShort}>{country.population}</Text>
              </View>
            </View>
            <View style={styles.flagBox}>
              <Flag id={country.code} />
            </View>
          </View>
          <View style={styles.container1}>
            <View style={styles.container4}>
              <View style={styles.container3}>
                <Text style={styles.textHeader1}> DATA COMMISSIONER </Text>
                <Text style={styles.text1}>{country.dataCommissioner}</Text>
              </View>
              <View style={styles.container3}>
                <Text style={styles.textHeader}>
                  {" "}
                  {"National Supervisory Authority".toUpperCase()}{" "}
                </Text>
                <Text style={styles.text}>
                  {country.nationalSupervisoryAuthority}
                </Text>
              </View>
              <View style={styles.container3}>
                <Text style={styles.textHeader}> ADRESS </Text>
                <Text style={styles.text}>{country.address}</Text>
              </View>
              <View style={styles.container3}>
                <Text style={styles.textHeader}> TELEPHONE </Text>
                <Text
                  style={styles.textLink}
                  onPress={() => Linking.openURL("tel:" + country.telephone)}
                >
                  {country.telephone}
                </Text>
              </View>
              <View style={styles.container3}>
                <Text style={styles.textHeader}> E-MAIL </Text>
                <Text
                  style={styles.textLink}
                  onPress={() => Linking.openURL("mailto:" + country.email)}
                >
                  {country.email}
                </Text>
              </View>
              <View style={styles.container3}>
                <Text style={styles.textHeader}> HOMEPAGE </Text>
                <Text
                  style={styles.textLink}
                  onPress={() => Linking.openURL(country.homepage)}
                >
                  {country.homepage}
                </Text>
              </View>
              <View style={styles.container3}>
                <Text style={styles.text}>{"  " + "\n" + "  "}</Text>
              </View>
              <View style={styles.container3}>
                <Text style={styles.textHeader}> SPECIFIC LAW </Text>
                <Text style={styles.text}>{country.specificLaw}</Text>
              </View>
              <View style={styles.container3}>
                <Text style={styles.textHeader}> MOST RECENT LAW CASES </Text>
                <Text style={styles.text}>{country.mostRecentLawCases}</Text>
              </View>
              <View style={styles.container3}>
                <Text style={styles.text}>{"  "}</Text>
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
    marginTop: 17,
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
    fontSize: 22,
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
    fontSize: 22,
  },
  headline: {
    color: mainColor,
    width: 137,
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default ResultScreen;
