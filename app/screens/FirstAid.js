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

class FirstAid extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.container1}>
            <View style={styles.container4}>
              <View style={styles.container3}>
                <Text style={styles.textHeader}>
                  {" "}
                  The following special categories of {"\n"} personal data are
                  considered "sensitive" {"\n"} and enjoy special protection
                  under the {"\n"} General Data Protection Regulation:{" "}
                </Text>
                <Text style={styles.text}>- Racial or ethnic origin</Text>
                <Text style={styles.text}>- Political opinions</Text>
                <Text style={styles.text}>
                  - Religious or ideological beliefs
                </Text>
                <Text style={styles.text}>- Union membership</Text>
                <Text style={styles.text}>- Processing of genetic data</Text>
                <Text style={styles.text}>
                  - Biometric data for the unique identification {"\n "} of a
                  natural person
                </Text>
                <Text style={styles.text}>- Health</Text>
                <Text style={styles.text}>
                  - Sex life or sexual orientation
                </Text>
              </View>

              <View style={styles.container3}>
                <Text style={styles.textHeader}>
                  {" "}
                  In principle , the processing of the {"\n"} aforementioned
                  types of data is prohibited. {"\n"} However, there are certain
                  exceptions {"\n"} in which companies or organizations are
                  {" \n "}
                  allowed to process sensitive personal data, {"\n"} e.g. B. if
                  You have obviously made your {"\n"} sensitive information
                  public; You have {"\n"} given your express consent; a law
                  regulates {"\n"} a certain type of data processing for a
                  {" \n "}
                  certain purpose for reasons of public {"\n"} interest or
                  public health; a law that includes {"\n"} appropriate
                  safeguards for processing {"\n"} sensitive personal data in
                  areas such {"\n"} as public health, employment and social
                  {" \n "}
                  protection.
                </Text>
                <Text style={styles.text}>
                  The National Bureau of Statistics (a government agency)
                  organizes a census every five years. You will receive a link
                  to a survey that you must fill out. The survey includes fields
                  such as gender and racial or ethnic origin. In this case, your
                  sensitive personal data may be processed by the national
                  statistical office, as the survey is based on a law that
                  serves a goal of public interest and includes guarantees to
                  protect your sensitive data (e.g. only authorized recipients
                  who working for the census, access to the data).
                </Text>
              </View>

              <View style={styles.container3}>
                <Text style={styles.textHeader}>
                  {" "}
                  Can personal data be collected from {"\n"} children?{" "}
                </Text>
                <Text style={styles.text}>
                  Additional protection is provided for this type of personal
                  data as children are less aware of the risks and consequences
                  of the data exchange and of their rights. Any information
                  aimed specifically at children should be adapted so that it is
                  presented in an easily accessible form and in clear and simple
                  language . Most online services require the consent of a
                  parent or legal guardian for the processing of a child's
                  personal data up to a certain age . This applies to social
                  networks as well as platforms for downloading music and buying
                  online games. The age limit for the parents' consent
                  requirement varies between 13 and 16 years, depending on the
                  setting in the respective EU member state. Check with your
                  national data protection authority . Companies must make
                  reasonable efforts, taking into account the technology
                  available, to ensure that consent is genuinely in line with
                  the Regulation. This may include performing age verification
                  activities (such as asking a question the average child cannot
                  answer, or asking the child to provide a parent's email
                  address for written consent) ). Prevention or counseling
                  services that are offered directly to children are exempt from
                  the requirement of parental consent as they serve to protect
                  the best interests of the child.
                </Text>
              </View>

              <View style={styles.container3}>
                <Text style={styles.textHeader}>
                  {" "}
                  Parental consent required{" "}
                </Text>
                <Text style={styles.text}>
                  You have a twelve year old daughter. She wants to join a
                  popular social network and is asked for consent to process
                  information about her religion. You would have to give your
                  consent if you want to give her the opportunity to join this
                  network. Parental consent not required Your seventeen year old
                  son is considering taking part in an online survey about his
                  clothing consumption behavior. The website asks for consent to
                  process your data. Since he's over 16, he can give consent
                  without asking you.
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

export default FirstAid;
