import { StatusBar } from 'expo-status-bar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';


class AboutUs extends React.Component {
  render(){ return(
//  const onPress = () => ;

    <SafeAreaView style={styles.container}>
      <View >
         
      <Text style={styles.titletext} >   First Aid:</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.header1}>How is religious belief / sexual orientation / health / political opinion data protected?</Text>
        <Text style={styles.header2}>answer</Text>
        <Text style={styles.paragragh}>The following special categories of personal data are considered "sensitive" and enjoy special protection under the General Data Protection Regulation:

racial or ethnic origin;
political opinions;
religious or ideological beliefs;
Union membership;
Processing of genetic data;
biometric data for the unique identification of a natural person;
Health;
Sex life or sexual orientation.
In principle , the processing of the aforementioned types of data is prohibited . However, there are certain exceptions in which companies or organizations are allowed to process sensitive personal data, e.g. B. if

You have obviously made your sensitive information public;
You have given your express consent;
a law regulates a certain type of data processing for a certain purpose for reasons of public interest or public health;
a law that includes appropriate safeguards for processing sensitive personal data in areas such as public health, employment and social protection.</Text>


<Text style={styles.header2}>example</Text>
        <Text style={styles.paragragh}>The National Bureau of Statistics (a government agency) organizes a census every five years. You will receive a link to a survey that you must fill out. The survey includes fields such as gender and racial or ethnic origin. In this case, your sensitive personal data may be processed by the national statistical office, as the survey is based on a law that serves a goal of public interest and includes guarantees to protect your sensitive data (e.g. only authorized recipients who working for the census, access to the data).</Text>      
      </View>

      <View style={styles.bottom}>
        <Text style={styles.header1}>Can personal data be collected from children?</Text>
        <Text style={styles.header2}>answer</Text>
        <Text style={styles.paragragh}> Additional protection is provided for this type of personal data as children are less aware of the risks and consequences of the data exchange and of their rights. Any information aimed specifically at children should be adapted so that it is presented in an easily accessible form and in clear and simple language .

Most online services require the consent of a parent or legal guardian for the processing of a child's personal data up to a certain age . This applies to social networks as well as platforms for downloading music and buying online games.

The age limit for the parents' consent requirement varies between 13 and 16 years, depending on the setting in the respective EU member state. Check with your national data protection authority .

Companies must make reasonable efforts, taking into account the technology available, to ensure that consent is genuinely in line with the Regulation. This may include performing age verification activities (such as asking a question the average child cannot answer, or asking the child to provide a parent's email address for written consent) ).

Prevention or counseling services that are offered directly to children are exempt from the requirement of parental consent as they serve to protect the best interests of the child.</Text>


<Text style={styles.header2}>example</Text>
        <Text style={styles.paragragh}>Parental consent required

You have a twelve year old daughter. She wants to join a popular social network and is asked for consent to process information about her religion. You would have to give your consent if you want to give her the opportunity to join this network.

Parental consent not required

Your seventeen year old son is considering taking part in an online survey about his clothing consumption behavior. The website asks for consent to process your data. Since he's over 16, he can give consent without asking you.</Text>      
      </View>

      <View style={styles.bottom}>
        <Text style={styles.header1}>Can my employer oblige me to give my consent to the use of my personal data?</Text>
        <Text style={styles.header2}>answer</Text>
        <Text style={styles.paragragh}> The relationship between employer and employee is generally seen as an imbalance in which the employer has more powers than the employee. Since consent must be given voluntarily, given this imbalance, in most cases your employer cannot rely on your consent to the use of your data.

In certain situations, the processing of an employee's personal data on the basis of his or her consent is lawful, especially when it is in the interests of the employee. For example, if a company grants benefits to its employees or their family members (e.g. discounts on company services), the processing of their personal data is permitted and lawful, provided that informed consent has been given beforehand.</Text>


<Text style={styles.header2}>example</Text>
        <Text style={styles.paragragh}>Consent void

Your employer believes that job performance needs to be increased. To do this, he intends to install video surveillance in the hallways and at the entrance to the toilets. He will ask for your consent so that he can monitor your movements and the time spent out of the office. Even if you did give consent, it would be deemed void and your employer would not be able to install video surveillance based on this consent.</Text>      
      </View>
      <View style={styles.bottom}>
        <Text style={styles.header1}>How should my consent be obtained?</Text>
        <Text style={styles.header2}>answer</Text>
        <Text style={styles.paragragh}> The request for consent must be clear and concise in understandable language and clearly distinguishable from other matters such as general terms and conditions. The request must state how your personal data will be used . In addition, the contact details of the company processing the data must be given. Consent must be given voluntarily, for the specific case, in an informed manner and unambiguously. "In an informed manner" means that you must receive information about the processing of your personal data, including at least:

the identity of the organization responsible for data processing;
the purposes of the data processing;
the type of data processed;
the possibility of withdrawing consent (e.g. by sending an email to withdraw consent);
if applicable, the intention to use the data exclusively for automated decision-making including profiling;
Information on whether the consent relates to international data transfers, the possible risks of data transfers to countries outside the EU if there is no adequacy decision by the Commission for these countries and if there are no appropriate guarantees.</Text>


<Text style={styles.header2}>example</Text>
        <Text style={styles.paragragh}>Parental consent required

You have a twelve year old daughter. She wants to join a popular social network and is asked for consent to process information about her religion. You would have to give your consent if you want to give her the opportunity to join this network.

Parental consent not required

Your seventeen year old son is considering taking part in an online survey about his clothing consumption behavior. The website asks for consent to process your data. Since he's over 16, he can give consent without asking you.The request for consent does not comply with the provisions of the regulation

You are enrolling at a music school for piano lessons. The registration form is a large document in small print that uses highly legal and technical terms and includes the option for the school to share your personal information with retailers who sell musical instruments. The school is violating the regulation because your consent to receive promotional materials (possibly from music stores) was not obtained in accordance with the regulation's terms.

You open a bank account online and want to confirm your application. You will be presented with a page with two check boxes saying “I accept the terms and conditions” or “I agree that the decision whether to get a credit card is based solely on profiling without human intervention”. Both check boxes are activated (checked) from the start. You must uncheck the box if you do not want to be dependent on a credit card issuance decision based solely on profiling. Even if you do not deactivate the check box, the bank will not receive effective consent, since check boxes that are ticked from the start do not count as effective consent in accordance with the General Data Protection Regulation.</Text>      
      </View>
      <View style={styles.bottom}>
        <Text style={styles.header1}>What happens if my submitted data is affected by a data breach?
</Text>
        <Text style={styles.header2}>answer</Text>
        <Text style={styles.paragragh}> A data protection breach occurs when a breach of data security unintentionally or unlawfully leads to the destruction, loss, modification or unauthorized disclosure of, or unauthorized access to, processed personal data. If this is the case, the organization processing personal data must inform the supervisory authority immediately. If the breach of the protection of personal data is likely to result in a high risk to your rights and freedoms and the risk has not been contained, you, as a person, must also be informed.

</Text>


<Text style={styles.header2}>example</Text>
        <Text style={styles.paragragh}>You have ordered your taxi via an online application. The taxi company has suffered a significant personal data breach and driver and user data has been stolen. Apparently there were no special security measures for the protection of personal data. The company should have informed you of the breach. In this case, you can file a complaint against the taxi company with the national data protection authority.</Text>      
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  )  
}
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    padding: 20,
    flex: 1,
    justifyContent: 'space-between'
  },
  sides:{

    
  },
  titletext:{
    backgroundColor: '#08146e',  
    color: '#ffffff',
    fontSize: 20,
    height: 40,
//    justifyContent: "center"
  },
  title:{
    backgroundColor: '#FF0000',  
    padding: 10,
    height: 40,
    width: 40

  },
  header1: {
    color: '#9c27b0',
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    flex: 0.25,
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  paragragh: {
    fontWeight: "bold",
    padding: 10,
    flex: 0.27,
    borderWidth: 5
  },
  header2: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    flex: 0.31,
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  bottom: {
    padding: 10,
    flex: 0.31,
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
});
export default AboutUs