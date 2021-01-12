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

class EuLaw extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.container1}>
            <View style={styles.container4}>
              <View style={styles.container3}>
                <Text style={styles.textHeader}>
                  {" "}
                  EU DATA PROTECTION LAW- GDPR{" "}
                </Text>
                <Text style={styles.text}>
                  In article 8 of the Charter of Fundamental Rights Everyone has
                  the right to the protection of personal data concerning him or
                  her Everyone has the right to access to data which have been
                  collected concerning him or her, and the right to have it
                  rectified In May 2016, the European Union adopted a data
                  protection package in order to adapt to the new digital age.
                  Regulation (EU) 2016/679 came into force on 24 May 2016 and
                  has been in force since 25 May 2018. The Regulation also known
                  as the “General Data Protection Regulation (GDPR) is the
                  toughest privacy and security law in the world. Even though it
                  was passed by the European Union (EU), it enforces obligations
                  on EU operating organizations as long as they target or
                  collect data related to the people in the EU. European Data
                  Protection Board (EDPB) is an independent European body that
                  provides to the consistent application of data protection
                  rules throughout the European Union promotes cooperation
                  between the EU’s data protection authorities consists of
                  representatives of the national data protection authorities,
                  and the European Data Protection Supervisor (EDPS) established
                  by the General Data Protection Regulation (GDPR) and is based
                  in Brussels Chair- Andrea Jelinek Deputy Chair- Ventsislav
                  Deputy Chair- Aleid Wolfsen Tasks and duties provide general
                  guidance (including guidelines, recommendations and best
                  practice) to clarify the law; advise the European Commission
                  on any issue related to the protection of personal data and
                  new proposed legislation in the European Union; adopt
                  consistency findings in cross-border data protection cases;
                  and promote cooperation and the effective exchange of
                  information and best practice between national supervisory
                  authorities.
                </Text>
              </View>

              <View style={styles.container3}>
                <Text style={styles.textHeader}> GUIDING PRINCIPLES </Text>

                <Text style={styles.text}>
                  Independence and impartiality Good governance, integrity and
                  good administrative behaviour Collegiality Cooperation
                  Transparency
                </Text>
                <Text style={styles.text}>
                  Efficiency and modernisation Proactivity Source:
                </Text>
                <Text
                  style={styles.textLink}
                  onPress={() =>
                    Linking.openURL(
                      "https://edpb.europa.eu/about-edpb/about-edpb_en"
                    )
                  }
                >
                  https://edpb.europa.eu/about-edpb/about-edpb_en
                </Text>
                <Text
                  style={styles.textLink}
                  onPress={() =>
                    Linking.openURL(
                      "https://ec.europa.eu/info/law/law-topic/data-protection/data-protection-eu_en"
                    )
                  }
                >
                  https://ec.europa.eu/info/law/law-topic/data-protection/data-protection-eu_en
                </Text>
              </View>

              <View style={styles.container3}>
                <Text style={styles.text}>{"  "}</Text>
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
    fontSize: 13,
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

export default EuLaw;
