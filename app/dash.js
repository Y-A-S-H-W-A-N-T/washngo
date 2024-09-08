import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function SignUp() {

  const router = useRouter()
  const params = useLocalSearchParams()

  const LogOut = ()=>{
    router.replace('/')
  }


  return (
    <View style={styles.container}>
      {/* logo */}
      <ImageBackground
        source={require('../assets/images/logo.jpeg')}
        style={styles.image}
        resizeMode='center'
      >
        <View style={styles.overlay}>
            <View>
                <View style={styles.intro}>
                    <Text style={styles.buttonText}>Welcome {params.name}</Text>
                </View>
                <TouchableOpacity style={styles.SignInbutton} onPress={LogOut}>
                  <Text style={styles.SignInbuttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white'
    },
    image: {
      height: '100%',
      width: '100%',
      top: -280,
      left: 50,
      maxWidth: 300,
    },
    overlay: {
      top: 470,
      left: -120
    },
    intro: {
      marginTop: 80,
      width: 500
    },
    buttonText: {
      color: 'black',
      padding: 20,
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      justifyContent: 'center',
    },
    signInBox: {
        left: 100,
        marginTop: 10
    },
    SignInbutton: {
      backgroundColor: '#a3cfff',
      borderRadius: 300,
      marginTop: 100,
      left: 100,
      width: '110%'
    },
    SignInbuttonText: {
      fontSize: 25,
      color: '#123457',
      padding: 15,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });