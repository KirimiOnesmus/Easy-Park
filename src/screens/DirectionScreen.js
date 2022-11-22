import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React,{useState,useRef} from 'react'
import MapView, { Marker,PROVIDER_GOOGLE} from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { useDispatch, useSelector } from 'react-redux'
import {  selectGarageDestination, selectOrigin } from '../slices/navSlice'

const DirectionScreen = () => {
    const origin=useSelector(selectOrigin)
    const garageLocation =useSelector(selectGarageDestination)
    const LATITUDE_DELTA=0.02;
    const LONGITUDE_DELTA=LATITUDE_DELTA*ASPECT_RATIO;
    const{width,height}=Dimensions.get("window");
    const ASPECT_RATIO=width/height;
    const mapRef = useRef(null)

  return (
    <View>
      <MapView
        mapType='mutedStandard'
        ref={mapRef}
        initialRegion={{
        latitude:origin.location.lat,
        longitude:origin.location.lng,
        latitudeDelta:LATITUDE_DELTA,
        longitudeDelta:LONGITUDE_DELTA
        }}
        style={styles.map}
      >
 {origin?.location&&(
        <Marker
          coordinate={{
            latitude:origin.location.lat,
            longitude:origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
        )}

        {garageLocation?.location &&(
            <Marker
            coordinate={{
                latitude:garageLocation.location.lat,
                longitude:garageLocation.location.lng
            }}
            title="Destination"
            
            identifier="destination"
            
            />
            )}
     
      </MapView>
    </View>
  )
}

export default DirectionScreen

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
       
        
      },
})