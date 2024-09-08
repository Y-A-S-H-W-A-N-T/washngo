import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Checkbox from 'expo-checkbox';
import { useRouter } from 'expo-router';
import axios from 'axios'

export default function Login() {

    const [checkbox,setCheckBox] = useState(false)

    const router = useRouter()
    const [loading,setLoading] = useState(false)

    const SignIn = ()=>{
        router.navigate('/signin')
    }

    const [user,setUser] = useState({
      name: '',
      phone: '',
      password: ''
    })


    const handleSignUp = async()=>{
      if(!checkbox) return alert("Agree with the terms and condition by checking the box")
      if(user.name==='' || user.password==='' || user.phone==='') return alert("Enter all fields")
      setLoading(true)
      console.log(user)
      await axios.post('https://tor.appdevelopers.mobi/api/register',{
        name: user.name,
        phone: user.phone,
        password: user.password
      })
      .then((res)=>{
        console.log(res.data)
        setLoading(false)
        if(res.data.status === true){
          setUser({
            name: '',
            phone: '',
            password: ''
          })
          router.replace({ pathname: '/dash', params: { name: user.name } })
        }
        else{
          alert("Error while SignUp, Please try again later")
        }
      })
      .catch((err)=>{
        setLoading(false)
        console.log(err)
        alert('Please use a proper/valid number in place of email')
      })
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
            <View style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
                <View style={styles.welcome}>
                    <Text style={styles.welcomeText}>Fill in the below form and add life to your car!</Text>
                </View>
                {/* input section */}
                <View style={styles.signInBox}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>Name</Text>
                </View>
                <View style={styles.inputBox}>
                    <TextInput value={user.name} placeholder='👤 Enter your name' style={styles.input} onChangeText={(val)=>setUser(prev=>({...prev,name: val}))}/>
                </View>
                <View style={styles.signInBox}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>Email</Text>
                </View>
                <View style={styles.inputBox}>
                    <TextInput value={user.phone} placeholder='✉️ xyz@gmail.com' style={styles.input} onChangeText={(val)=>setUser(prev=>({...prev,phone: val}))}/>
                </View>
                <View style={styles.signInBox}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>Password</Text>
                </View>
                <View style={styles.inputBox}>
                    <TextInput value={user.password} placeholder='🔒 password' style={styles.input} onChangeText={(val)=>setUser(prev=>({...prev,password: val}))}/><AntDesign style={{left: 200, top: 5}} name="eye" size={20} color="grey" />
                </View>
                <View style={styles.forgetPass}>
                    <Checkbox
                        style={{height: 15, width: 15, marginRight: 20, marginTop: 3, left: 10}}
                        value={checkbox}
                        onValueChange={()=>setCheckBox(!checkbox)}
                    />
                    <Text style={{color: 'black', fontWeight: 'bold'}}>Agree with 
                        <Text style={{color: 'grey', textDecorationLine: 'underline'}}>Terms & Conditions</Text></Text>
                </View>
                <TouchableOpacity style={styles.SignInbutton} onPress={handleSignUp}>
                  <Text style={styles.SignInbuttonText}>{loading? 'Loading...' : 'Sign In'}</Text>
                </TouchableOpacity>
                <View>
                  <Image
                    source={require('../assets/images/watersplash.jpeg')}
                    style={{left: 40}}
                  />
                  <View style={{bottom: 160, left: 120, width: '100%'}}>
                    <Text style={{textAlign: 'center', color: '#36454F'}}>Already have an account? <Text style={{textDecorationLine: 'underline', fontWeight: 'bold', color: 'black'}} onPress={SignIn}>Sign In</Text></Text>
                  </View>
                  <Text style={{color: 'grey',textAlign: 'center', bottom: 120, left: 80, width: '120%'}}>By login or sign up, you agree to our terms of use and privacy policy</Text>
                </View>
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
        width: 250,
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
        width: '100%',
        flexDirection: 'row'
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