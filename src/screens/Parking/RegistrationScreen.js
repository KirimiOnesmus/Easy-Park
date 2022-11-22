
import { ScrollView, StyleSheet, Text, View,Pressable,Keyboard, Alert} from 'react-native'
import React,{createRef, useState} from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import VehicleInput from "../../components/VehicleInput"
import Loader from '../../components/Loader'
import COLORS from '../../consts/colors'

import { db } from '../../config/fb';
import { doc,setDoc,addDoc, collection } from 'firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import  Constants  from 'expo-constants';




const RegistrationScreen = () => {
  const[identification,setIdentification]=useState('');
  const[phone,setPhone]=useState('');
  const[regNumber,setRegNumber]=useState('');
  const[model,setModel]=useState('');
  const[loading,setLoading]=useState(false);

  const navigation=useNavigation()


  const identificationInputRef=createRef();
  const phoneInputRef=createRef();
  const regInputRef=createRef();
  const modelInputRef=createRef();


    const register=()=>{
   

      if(!identification){
        alert('Please fill Identification');
        return;
      }
      if(!phone){ 
        alert('Add your phone number');
        return;
      }
      if(!regNumber){
        alert('Please fill vehicle registration Number');
        return;
      }
      if(!model){
        alert('Please fill the vehicle model');
        return;
      }
      setLoading(true);

      addDoc(collection(db,"vehicles"),{
        ID:identification,
        phone:phone,
        registration: regNumber,
        model:model,
      }).then(()=>{
        console.log("Data Submited");
        setLoading(false);
        navigation.navigate('Payment')
      }).catch((error)=>{
        console.log(error)
        setLoading(false)
      });

      setTimeout(async res=>{
          setLoading(false);
          try{
           
 
          }catch(error){
              Alert.alert('Error','Registration failed try again later');
          }
      },3000)
    }; 


 
  return (
    <View>
       <Loader visible={loading}/>
      <SafeAreaView>

        <ScrollView style={{marginVertical:40}}>
          
            <VehicleInput
            iconName="account-outline"
            label="Identification"
            placeholder="Enter Your ID Number"
            onChangeText={(identification)=>setIdentification(identification)}
            
            returnKeyType="next"
            blurOnSubmit={false}
            ref={identificationInputRef}

            />
          <VehicleInput
          keyboardType="numeric"
          placeholder="Enter your Phone Number" 
          iconName="phone-outline" 
          label="Contact Info"
          onChangeText={(phone)=>setPhone(phone)}
        
          returnKeyType="next"
          blurOnSubmit={false}
          ref={phoneInputRef}
            
          
          />
           <VehicleInput
          placeholder="KCA.001.C"
          iconName="book-outline" 
          label="Vehicle Registration Number"
          onChangeText={(regNumber)=>{setRegNumber(regNumber)}}
          autoCapitalize = {"characters"}
          returnKeyType="next"
          blurOnSubmit={false}
          ref={regInputRef}
   
          />
          <VehicleInput
          placeholder="Audi rs4"
          iconName="car-outline" 
          label="Vehicle Model"
          onChangeText={(model)=>{setModel(model)}}
         
          blurOnSubmit={false}
          ref={modelInputRef}
          onSubmitEditing={Keyboard.dismiss}
     
          />
           {/* <VehicleInput
          placeholder="Audi rs4"
          iconName="car-outline" 
          label="Booked Garage"
          onChangeText={markers?.title}
          blurOnSubmit={false}
          onSubmitEditing={Keyboard.dismiss}
     
          /> */}

          <Pressable style={styles.button} onPress={register} activeOpacity={0.5} >
            <Text style={styles.text}>Register</Text>
          </Pressable>

    

          </ScrollView>

      </SafeAreaView>


    
    </View>
  )
}

export default RegistrationScreen

const styles = StyleSheet.create({
  button:{
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:15,
    paddingHorizontal:0,
    marginHorizontal:10,
    borderRadius:4,
    elevation:3,
    backgroundColor:COLORS.darkBlue
    
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  searchContainer:{
   
  
    shadowColor:'black',
    shadowOffset:{width:2,height:2},
    
    //android shadow
  
    padding:10,
    borderRadius:8,
    top:Constants.statusBarHeight,
    alignSelf:'center',
    flex:1,
    margin:40
    
    

  },
  input:{
    borderColor:'#888',
    borderWidth:1,
    marginTop:5

}
})