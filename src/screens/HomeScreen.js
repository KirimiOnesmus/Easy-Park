import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import { setDestination,setOrigin } from '../slices/navSlice'
import VehicleOptions from '../components/vehicleOptions'
import  Constants  from 'expo-constants';


import Map from '../components/Map'

const HomeScreen = () => {
  const dispatch=useDispatch(); 
  const GOOGLE_API_KEY= "AIzaSyCT9sn49OAN7JJbN2RUsN5j-u58qFSJqhw"


  return (
    <SafeAreaView style={{backgroundColor:'white',height:'100%'}}>
       <Map/> 

      <View style={{position:'absolute',width:'100%',paddingHorizontal:20,paddingVertical:30}}>
          <GooglePlacesAutocomplete
            styles={{textInput:styles.input}}
            placeholder='Where To'
            fetchDetails={true}
            returnKeyType={"search"}
            onPress={(data, details = null) => {
            dispatch(setDestination({
            location: details.geometry.location,
            description: data.description, 
              }))
            }}
            query={{
            key: GOOGLE_API_KEY,
            language: 'en',
            }}
            minLength={2}
            debounce={200}
            enablePoweredByContainer={false}
            />
      </View> 
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color:"green",

    }
}) 