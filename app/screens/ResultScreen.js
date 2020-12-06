import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { Flag } from "react-native-svg-flagkit";

const database = require("../database/database.json");

class ResultScreen extends React.Component {
  render() {
    const country = database.country[this.props.route.params.country];

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container1}>
          <View style={styles.container2}>
            <Text numberOfLines={1} style={styles.headline}>
              {country.name.toUpperCase()}
            </Text>
            <View style={styles.container3}>
              <Text style={styles.textHeader2}> CAPITAL </Text>
              <Text style={styles.text}>{country.capital}</Text>
            </View>
            <View style={styles.container3}>
              <Text style={styles.textHeader2}> POPULATION </Text>
              <Text style={styles.text}>{country.population}</Text>
            </View>
          </View>
          <View style={styles.flagBox}>
            <Flag id={country.code} />
          </View>
        </View>
        <View style={styles.container1}>
          <View style={styles.container2}>
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
              <Text style={styles.text}>{country.telephone}</Text>
            </View>
            <View style={styles.container3}>
              <Text style={styles.textHeader}> E-MAIL </Text>
              <Text style={styles.text}>{country.email}</Text>
            </View>
            <View style={styles.container3}>
              <Text style={styles.textHeader}> HOMEPAGE </Text>
              <Text style={styles.text}>{country.homepage}</Text>
            </View>
            <View style={styles.container3}>
              <Text style={styles.textHeader}> SPECIFIC LAW </Text>
              <Text style={styles.text}>{country.specificLaw}</Text>
            </View>
            <View style={styles.container3}>
              <Text style={styles.textHeader}> MOST RECENT LAW CASES </Text>
              <Text style={styles.text}>{country.mostRecentLawCases}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mainColor = "#003399";
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
    alignItems: "flex-start",
  },
  container3: {
    backgroundColor: tertColor,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  flagBox: {
    backgroundColor: mainColor,
    padding: 3,
    borderRadius: 3,
    alignSelf: "flex-start",
  },
  textHeader2: {
    backgroundColor: mainColor,
    borderRadius: 7,
    color: tertColor,
    fontSize: 14,
  },
  textHeader: {
    marginTop: 17,
    backgroundColor: mainColor,
    borderRadius: 7,
    color: tertColor,
    fontSize: 14,
  },
  textHeader1: {
    marginTop: 17,
    backgroundColor: mainColor,
    borderRadius: 7,
    color: tertColor,
    fontSize: 19,
  },
  text: {
    marginLeft: 3,
    color: mainColor,
    fontSize: 14,
  },
  text1: {
    marginLeft: 3,
    color: mainColor,
    fontSize: 19,
  },
  headline: {
    color: mainColor,
    fontSize: 25,
  },
});

export default ResultScreen;
