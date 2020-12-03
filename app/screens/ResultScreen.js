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
            <Text numberOfLines={1} style={{ fontSize: 23 }}>
              {country.name.toUpperCase()}
            </Text>
            <View style={styles.container3}>
              <Text style={styles.textHeader}> Capital: </Text>
              <Text style={styles.text}> {country.capital}</Text>
            </View>
            <View style={styles.container3}>
              <Text style={styles.textHeader}> Population: </Text>
              <Text style={styles.text}> {country.population}</Text>
            </View>
          </View>
          <Flag id={country.code} />
        </View>
        <Text>Data Commissioner: {country.dataCommissioner}</Text>
        <Text>
          National Supervisory Authority: {country.nationalSupervisoryAuthority}
        </Text>
        <Text>Address: {country.address}</Text>
        <Text>Telephone: {country.telephone}</Text>
        <Text>E-Mail: {country.email}</Text>
        <Text>Homepage: {country.homepage}</Text>
        <Text>Specififc Law: {country.specificLaw}</Text>
        <Text>Most Recent Law Cases: {country.mostRecentLawCases}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  container1: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexWrap: "wrap",
    padding: 27,
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  container3: {
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textHeader: {
    backgroundColor: "#003399",
    borderRadius: 10,
    color: "#fff",
    textAlign: "center",
  },
  text: {
    color: "#003399",
    textAlign: "center",
  },
});

export default ResultScreen;
