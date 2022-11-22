import { StyleSheet, Text, View ,TouchableOpacity,Image, Alert, ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Inputs from '../../components/UserRegistration/Inputs'
import { useNavigation } from '@react-navigation/native'
import COLORS from '../../consts/colors'
import {auth,db} from '../../config/fb'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Loading from '../../components/Loader'





const LoginScreen = () => {
  
 const [email,setEmail]=React.useState();
 const [password,setPassword]=React.useState();
 
  
  const navigation=useNavigation()
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(user=>{
      if(user){
        navigation.replace('Tabs')
      }
    })
    return unsubscribe
  },[])
    const login=()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user=userCredential.user;
      console.log(user)
  
        navigation.navigate('Tabs')
      
    })
    .catch(error=>{
      console.log(error)
    Alert.alert(error.message)
    })

    }

    
   


  return (
   <SafeAreaView style={{backgroundColor:'white' ,flex:1,alignContent:'center',justifyContent:'center',paddingHorizontal:30}}>
      <Loading/>
      
     
        
          <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image 
              source={require('../../assets/icons/parked.jpg')}
              style={{width:150,height:150,borderRadius:150/2}}/>
              <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}>Log In</Text>
            </View>
            <View>

              <Inputs
                    onChangeText={(email) => setEmail( email)} 
                    iconName="email-outline"
                    label="Email"
                    placeholder="Enter your email address"
                    value={email}
                
              />
              <Inputs
                  onChangeText={(password) => setPassword(password)} 
                  iconName="lock-outline"
                  label="Password"
                  placeholder="Enter your password"
                  value={password}
                  password
                />
         
      <TouchableOpacity
        onPress={login}
       activeOpacity={0.7}
       style={{
         height: 55,
         width: '100%',
         backgroundColor: COLORS.blue,
         marginVertical: 10,
         justifyContent: 'center',
         alignItems: 'center',
         borderRadius:5
       }}>
       <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>
         Log In
       </Text>
     </TouchableOpacity>
         <Text
             onPress={() => navigation.navigate('RegisterScreen')}
             style={{
             color: COLORS.black,
             fontWeight: 'bold',
             textAlign: 'center',
             fontSize: 16,
             marginHorizontal:5,
            
             }}>
             Don't have an account ?Register
       </Text>
       
      </View>

   </SafeAreaView>
  )
}

export default LoginScreen
