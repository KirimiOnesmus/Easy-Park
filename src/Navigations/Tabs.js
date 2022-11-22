import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Tabs Icons

import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

//screens
import HomeScreen from '../screens/HomeScreen'
import ParkingScreen from '../screens/Parking/ParkingGarage'
import ProfileScreen from '../screens/Users/ProfileScreen'

import COLORS from '../consts/colors'

const Tabs = () => {
    const Tab = createBottomTabNavigator();
  return (
<Tab.Navigator
   screenOptions={{
    showLabel:false,
    style:{
        position:'absolute',
        bottom:50,
        left:20,
        right:20,
        elevation:0,
        backgroundColor:COLORS.white,
        borderRadius:15,
        height:50,
    },
    activeTintColor:'#BF40BF',
    tabStyle:{
        paddingBottom:5,
        padingTop:5,
    }
   }}
>
    <Tab.Screen name="Inico" component={HomeScreen}
    options={{
        headerShown:false,
        tabBarIcon:({size,color})=>{
            
           return  <Entypo name="home" size={size} color={color} />
        }
    }}
    />
    <Tab.Screen name="Parking" component={ParkingScreen}
        options={{
            headerShown:false,
            tabBarIcon:({size,color})=>{  
                 return   <MaterialIcons name="local-parking"  size={size} color={color}/>
            }
        }}/>
    <Tab.Screen name="Account" component={ProfileScreen}
        options={{
            headerShown:false,
            tabBarIcon:({size,color})=>{
               
               return <FontAwesome name="user-circle-o"  size={size} color={color}  />

            }
        }}/>

</Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})