import { useRouter } from 'expo-router';
import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, Button, TouchableOpacity } from 'react-native';

const MainPage = () => {

    const router = useRouter()

    const SignIn = ()=>{
        router.navigate('/signup')
    }

    const Login = ()=>{
      router.navigate('/signin')
    }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/temp.jpeg')} // Replace with your image path
        style={styles.image}
        resizeMode='contain'
      >
        <View style={styles.overlay}>
            <TouchableOpacity style={styles.button} onPress={SignIn}>
                <Text style={styles.buttonText}>Let's Start</Text>
            </TouchableOpacity>
            <Text style={styles.signinLink}>Already have an account? <Text style={styles.link} onPress={Login}>Sign in</Text></Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%'
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    top: 650,
    left: 30
  },
  button: {
    backgroundColor: '#a3cfff',
    borderRadius: 300
  },
  buttonText: {
    color: '#123457',
    padding: 15,
    width: 330,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signinLink: {
    color: 'grey',
    textAlign: 'center',
    paddingTop: 10
  },
  link: {
    color: 'black',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  }
});

export default MainPage;