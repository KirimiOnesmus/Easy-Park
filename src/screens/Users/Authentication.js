import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {auth} from '../../config/fb'
import { useEffect } from 'react'
import LoginScreen from './LoginScreen'
import { useNavigation } from '@react-navigation/native'

const navigation=useNavigation()

const Authentication = () => {
    useEffect(()=>{
        auth.onAuthStateChanged(currentUser=>{
            if(currentUser){
                navigation.navigate('tabs');
            }else{
                navigation.navigate(LoginScreen)
            }
        });
    },[])
  return (
    <View
    style={{
        padding:30,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }}
    >
      <Text>Authenticating</Text>
    </View>
  )
}

export default Authentication

const styles = StyleSheet.create({})