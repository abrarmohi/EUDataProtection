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
} from "react-native";

class EuLaw extends React.Component {
  render() {
    return (
      //  const onPress = () => ;

      <SafeAreaView style={styles.container}>
        <View style={styles.bottom}>
          <Text style={styles.header}>EU Data Protection Law- GDPR</Text>
          <Text style={styles.paragragh}>
            In article 8 of the Charter of Fundamental Rights Everyone has the
            right to the protection of personal data concerning him or her
            Everyone has the right to access to data which have been collected
            concerning him or her, and the right to have it rectified In May
            2016, the European Union adopted a data protection package in order
            to adapt to the new digital age. Regulation (EU) 2016/679 came into
            force on 24 May 2016 and has been in force since 25 May 2018. The
            Regulation also known as the “General Data Protection Regulation
            (GDPR) is the toughest privacy and security law in the world. Even
            though it was passed by the European Union (EU), it enforces
            obligations on EU operating organizations as long as they target or
            collect data related to the people in the EU. European Data
            Protection Board (EDPB) is an independent European body that
            provides to the consistent application of data protection rules
            throughout the European Union promotes cooperation between the EU’s
            data protection authorities consists of representatives of the
            national data protection authorities, and the European Data
            Protection Supervisor (EDPS) established by the General Data
            Protection Regulation (GDPR) and is based in Brussels Chair- Andrea
            Jelinek Deputy Chair- Ventsislav Deputy Chair- Aleid Wolfsen Tasks
            and duties provide general guidance (including guidelines,
            recommendations and best practice) to clarify the law; advise the
            European Commission on any issue related to the protection of
            personal data and new proposed legislation in the European Union;
            adopt consistency findings in cross-border data protection cases;
            and promote cooperation and the effective exchange of information
            and best practice between national supervisory authorities.
          </Text>

          <Text style={styles.header}>Guiding principles</Text>
          <Text style={styles.paragragh}>
            Independence and impartiality Good governance, integrity and good
            administrative behaviour Collegiality Cooperation Transparency
            Efficiency and modernisation Proactivity Source:
            https://edpb.europa.eu/about-edpb/about-edpb_en
            https://ec.europa.eu/info/law/law-topic/data-protection/data-protection-eu_en
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    padding: 20,
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  sides: {},
  titletext: {
    backgroundColor: "#08146e",
    color: "#ffffff",
    fontSize: 20,
    height: 40,
    //    justifyContent: "center"
  },
  title: {
    backgroundColor: "#cbccd1",
    padding: 10,
    height: 40,
    width: 40,
  },
  top: {
    padding: 10,
    flex: 0.25,
    backgroundColor: "#cbccd1",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    padding: 10,
    backgroundColor: "#cbccd1",
    flex: 0.27,
    borderWidth: 5,
  },
  header: {
    color: "#9c27b0",
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    flex: 0.25,
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  paragragh: {
    fontWeight: "bold",
    padding: 10,
    flex: 0.27,
    borderWidth: 5,
  },
  bottom: {
    padding: 10,
    flex: 0.31,
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
export default EuLaw;
