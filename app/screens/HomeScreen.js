import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Image } from 'react-native';
import Mybutton from '../components/Mybutton';

const database = require('../database/database.json');

class HomeScreen extends React.Component {
    render() {

        return (
            <SafeAreaView style={styles.container}
            style={{
                flex: 1,
                backgroundColor: 'white',
                flexDirection: 'column',
              }}
      >
                        
                <Mybutton
                title="EU Countries"
                customClick={() => this.props.navigation.navigate('Input')}
                />
                <Mybutton
                title="EU Data Law"
                //customClick={() => this.props.navigation.navigate('Register')}
                />
                <Mybutton
                title="About Us"
                //customClick={() => this.props.navigation.navigate('Register')}
                />

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default HomeScreen