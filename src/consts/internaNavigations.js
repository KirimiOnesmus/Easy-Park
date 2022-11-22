import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DestinationScreen from '../screens/DestinationScreen';

const Stack =createNativeStackNavigator();

const internaNavigations = () => {
  
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="DestinationScreen"
            component={DestinationScreen}
            options={{headerShown:false}}
            />
        </Stack.Navigator>

  )
}

export default internaNavigations

const styles = StyleSheet.create({})