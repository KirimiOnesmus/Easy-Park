import { SafeAreaView, ScrollView, StyleSheet, Text, View ,TouchableOpacity,Image, Alert} from 'react-native'
import React,{ useState }  from 'react'
import Inputs from '../../components/UserRegistration/Inputs'
import COLORS from '../../consts/colors';
import { useNavigation } from '@react-navigation/native';
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth,db} from '../../config/fb'
import Loading from '../../components/Loader'
import { addDoc, collection,doc} from 'firebase/firestore'





const RegisterScreen = () => {

     const[email,setEmail]=useState('');
     const[name,setName]=useState('');
     const[phone,setPhone]=useState('');
     const[password,setPassword]=useState('');
     const[loading,setLoading]=useState('false');
    
     const emptyState=()=>{
      setEmail('');
      setName('');
      setPhone('');
      setPassword('');
     }



      const navigation=useNavigation()
    // const [errors, setErrors] = React.useState({});
    // const [loading, setLoading] =useState(false);
   const validate=async() =>{
       
        let isValid = true;
    
        if (!email) {
          handleError('Please input email', 'email');
          isValid = false;
        } else if (!email.match(/\S+@\S+\.\S+/)) {
          handleError('Please input a valid email', 'email');
          isValid = false;
        }
    
        if (!name) {
          handleError('Please input ame', 'name');
          isValid = false;
        }
    
        if (!phone) {
          handleError('Please input phone number', 'phone');
          isValid = false;
        }
    
        if (!password) {
          handleError('Please input password', 'password');
          isValid = false;
        } else if (password.length < 8) {
          handleError('Create a password that is strong with a min 8 char', 'password');
          isValid = false;
        }
        if(isValid=true){
          setLoading(true);
 

            createUserWithEmailAndPassword(auth,email,password)
            .then(result=>{
              const user=result.user;
                fb.collection("Users").addDoc(currentUser.uid)
                .set({
                  name,
                  phone,
                  email:user.email,
                  uid:user.uid
                  .then(this.checkStatus(status,{user}))
                })

            })
            .catch((error)=>{
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }
          
              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }
            });
          
        }

      }; 

 
  return (
  <SafeAreaView style={{backgroundColor:'white' ,flex:1}}>
    <ScrollView style={{paddingVertical:10,paddingHorizontal:20}}>
      <Loading/>
        <Text style={{color:'black' ,fontSize:40,fontWeight:'bold' ,textAlign:'center'}}>Register</Text>

        <View style={{marginVertical:10}}>
          <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
              <Image
                  source={require('../../assets/icons/user.jpg')}
                  style={{height:100,width:100,borderRadius:100/2,resizeMode:'contain'}}
              />
          </View>
        <Inputs
            // onChangeText={text => handleOnchange(text,'email')}
            // onFocus={() => handleError(null, 'email')}
            onChangeText={(email)=>setEmail(email)}
            value={email}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            autoCapitalize="none"
            // error={errors.email}

          />

          <Inputs
            // onChangeText={text => handleOnchange(text, 'name')}
            // onFocus={() => handleError(null, 'name')}
            onChangeText={(name)=>setName(name)}
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"
            value={name}
            // error={errors.name}
          />

          <Inputs
            keyboardType="numeric"
            // onChangeText={text => handleOnchange(text, 'phone')}
            // onFocus={() => handleError(null, 'phone')}
            onChangeText={(phone)=>setPhone(phone)}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
            // error={errors.phone}
            value={phone}
          />
          <Inputs
            // onChangeText={text => handleOnchange(text, 'password')}         
            // onFocus={() => handleError(null, 'password')}
            onChangeText={(password)=>setPassword(password)}
            iconName="lock-outline"
            label="Password" 
            placeholder="Enter your password"
            // error={errors.password}
            password
            value={password}
          />  
    <TouchableOpacity
          onPress={validate}
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
            Register
          </Text>
        </TouchableOpacity>
            <Text
                onPress={() => navigation.navigate('LoginScreen')}
                style={{
                color: COLORS.black,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 16,
                marginHorizontal:5,
               
                }}>
                Already have account ?Login
          </Text>
        </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})