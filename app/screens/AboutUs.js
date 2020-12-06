import { StatusBar } from 'expo-status-bar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';


class AboutUs extends React.Component {
  render(){ return(
//  const onPress = () => ;

    <SafeAreaView style={styles.container}>
      <View style={styles.sides}>
      <TouchableOpacity style={styles.title}>
      <FontAwesome5 name={'arrow-left'} size={20} color="black" />
      </TouchableOpacity>   
      <Text style={styles.titletext} >   About us:</Text>
      </View>
      <View style={styles.top}>
        <Text>Manager:</Text>
        <Text>Prof. Dr. Dieter Kopetz</Text>
        <Text>dieter.kopetz@hochschule-rhein-waal.de</Text>
        <Text>Friedrich-Heinrich-Allee 25</Text>
        <Text>47475, Kamp-Lintfort, Germany.</Text>
        <Text>+49 2842 908 25 0</Text>
      </View>
      <View style={styles.middle}>
        <Text>Developers:</Text>
        <Text>Abdalrahman Elmessiry</Text>
        <Text>Abrar-Mohi Shafee</Text>
        <Text>Ahmed Khattab</Text>
        <Text>Anas Abdulhalim</Text>
        <Text>Jannik Timmer</Text>
        <Text>Lakhan-Radhakrishna Vaishnav</Text>
      </View>
      <View style={styles.bottom}>
        <Text>Project members:</Text>
        <Text>Arzu Yaman</Text>
        <Text>John-Pingpoh Chokeh</Text>
        <Text>Maida Sinanovic</Text>
        <Text>Marie-Luise Speer</Text>
        <Text>Merve Cura</Text>
        <Text>Ramazana Omerovic</Text>
        <Text>Seyda Simsek</Text>
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
    backgroundColor: 'lightblue',
    justifyContent: 'space-between'
  },
  sides:{

    
  },
  titletext:{
    fontSize: 20,
//    justifyContent: "center"
  },
  title:{
    backgroundColor: '#FF0000',  
    padding: 10,
    height: 40,
    width: 40

  },
  top: {
    padding: 10,
    flex: 0.25,
    backgroundColor: "white",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  middle: {
    padding: 10,
    flex: 0.27,
    backgroundColor: "#ff39",
    borderWidth: 5
  },
  bottom: {
    padding: 10,
    flex: 0.31,
    backgroundColor: "#DB7093",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
});
export default AboutUs