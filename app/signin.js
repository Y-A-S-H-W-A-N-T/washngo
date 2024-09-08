import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react'
import { Divider } from 'react-native-paper';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import axios from 'axios';

export default function SignUp() {

  const router = useRouter()

  function NavigateToLogin(){
    router.navigate('/signup')
  }

  const [loading,setLoading] = useState(false)

  const [secureText,setSecureText] = useState(true)

  const [user,setUser] = useState({
    phone: '',
    password: ''
  })

  const handleSignIn = async()=>{
    if(user.password==='' || user.phone==='') return alert("Enter all fields")
    console.log(user)
    setLoading(true)
    await axios.post('https://tor.appdevelopers.mobi/api/login',{
      phone: user.phone,
      password: user.password
    })
    .then((res)=>{
      console.log(res.data)
      setLoading(false)
      if(res.data.status === true){
        router.replace({ pathname: '/dash', params: { name: res.data.data.name } })
      }
      else{
        alert("Error while SignIn, Please try again later")
        setUser({
          phone: '',
          password: ''
        })
      }
    })
    .catch((err)=>{
      setLoading(false)
      console.log(err)
      alert('Invalid Credential')
      setUser({
        phone: '',
        password: ''
      })
    })
  }


  return (
    <View style={styles.container}>
      {/* logo */}
      <KeyboardAvoidingView>
        <ImageBackground
          source={require('../assets/images/logo.jpeg')}
          style={styles.image}
          resizeMode='center'
        >
        <View style={styles.overlay}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
                <View style={styles.welcome}>
                    <Text style={styles.welcomeText}>Hi ! Welcome back, you have been missed</Text>
                </View>
                {/* input section */}
                <View style={styles.signInBox}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>Email</Text>
                </View>
                <View style={styles.inputBox}>
                    <TextInput value={user.phone} placeholder='✉️ xyz@gmail.com' style={styles.input}  onChangeText={(val)=>setUser(prev=>({...prev,phone: val}))}/>
                </View>
                <View style={styles.signInBox}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>Password</Text>
                </View>
                <View style={styles.inputBox}>
                    <TextInput secureTextEntry={secureText} value={user.password} placeholder='🔒 password' style={styles.input} onChangeText={(val)=>setUser(prev=>({...prev,password: val}))}/><AntDesign style={{left: 200, top: 5}} name="eye" size={20} color="grey" onPress={()=>setSecureText(!secureText)} />
                </View>
                <View style={styles.forgetPass}>
                    <Text style={{color: 'black', fontWeight: 'bold', textDecorationLine: 'underline'}}>Forgot password ?</Text>
                </View>
                <TouchableOpacity style={styles.SignInbutton} onPress={handleSignIn}>
                  <Text style={styles.SignInbuttonText}>{loading? 'Loading...' : 'Sign In'}</Text>
                </TouchableOpacity>
                {/* Divider Section */}
                <View style={styles.dividerSection}>
                  <Divider style={styles.divider}/>
                    <Text style={{marginHorizontal: 10, color: '#123457'}}>or</Text>
                  <Divider style={styles.divider}/>
                </View>
                <View style={styles.iconSection}>
                  <View style={styles.icons}>
                    <AntDesign name="google" size={20} color="black" />
                  </View>
                  <View style={styles.icons}>
                    <AntDesign name="apple1" size={20} color="black" />
                  </View>
                </View>
                <View>
                  <Image
                    source={require('../assets/images/watersplash.jpeg')}
                    style={{left: 40}}
                  />
                  <View style={{bottom: 160, left: 120, width: '100%'}}>
                    <Text style={{textAlign: 'center', color: '#36454F'}}>Don't have an account? 
                      <Text style={{textDecorationLine: 'underline', fontWeight: 'bold', color: 'black'}} onPress={NavigateToLogin}>Sign Up</Text>
                    </Text>
                  </View>
                  <Text style={{color: 'grey',textAlign: 'center', bottom: 100, left: 80, width: '120%'}}>By login or sign up, you agree to our terms of use and privacy policy</Text>
                </View>
            </View>
        </View>
      </ImageBackground>
      </KeyboardAvoidingView>
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
      left: 50,
      maxWidth: 300,
      bottom: 280
    },
    overlay: {
      top: 470,
      left: -120
    },
    button: {
      borderRadius: 0
    },
    buttonText: {
      color: 'black',
      padding: 20,
      width: 330,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
    },
    link: {
      color: 'black',
      textDecorationLine: 'underline',
      fontWeight: 'bold'
    },
    welcome: {
        left: 100,
        width: 180,
        marginTop: -10
    },
    welcomeText : {
        color: 'grey',
        fontSize: 15,
    },
    signInBox: {
        left: 100,
        marginTop: 10
    },
    input: {
        borderColor: 'black',
    },
    inputBox: {
        left: 100,
        marginTop: 5,
        padding: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        width: '110%',
        flexDirection: 'row'
    },
    forgetPass: {
        color: 'black',
        left: 100,
        marginTop: 5,
        marginLeft: '70%',
        width: '100%'
    },
    SignInbutton: {
      backgroundColor: '#a3cfff',
      borderRadius: 300,
      marginTop: 20,
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
    divider: {
      height: 1.5,
      backgroundColor: '#a3cfff',
      width: 100,
      flexDirection: 'row',
      marginTop: 10
    },
    dividerSection: {
      marginTop: 10,
      flexDirection: 'row',
      left: 150
    },
    iconSection: {
      marginTop: 10,
      flexDirection: 'row',
      left: 210,
    },
    icons: {
      padding: 8,
      borderRadius: 100,
      borderColor: '#a3cfff',
      borderWidth:1,
      marginHorizontal: 10
    }
  });