
import { StyleSheet, View ,Dimensions, Alert} from 'react-native'
import React, { useState,useEffect,useRef,useCallback } from 'react'
import MapView, { Marker,PROVIDER_GOOGLE} from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import COLORS from '../consts/colors'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { selectOrigin,selectDestination } from '../slices/navSlice'

import * as Location from 'expo-location';


const Map = () => {
 
  const{width,height}=Dimensions.get("window");
  const ASPECT_RATIO=width/height;
  const LATITUDE_DELTA=0.02;
  const LONGITUDE_DELTA=LATITUDE_DELTA*ASPECT_RATIO;
  const navigation=useNavigation();
  const mapRef = useRef(null)
  const GOOGLE_API_KEY= "AIzaSyCT9sn49OAN7JJbN2RUsN5j-u58qFSJqhw"
  const destination=useSelector(selectDestination);

  // const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);

//   const [mapRegion, setmapRegion] = useState({
//     latitude:60.1098678,
//     longitude: 24.7385084,
//     latitudeDelta: LATITUDE_DELTA,
//     longitudeDelta:LONGITUDE_DELTA,

//   });
// }
// useEffect(() => {
//     (async () => {
      
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }
  
//       let location = await Location.getCurrentPositionAsync({});
//       // setLatitude(location.coords.latitude)
//       // setLongitude(location.coords.longitude);
//       // setLocation(location.coords)
     
//     })();
//   }, []);
//   let text="waiting"
//   if(errorMsg){
//     text=errorMsg
//   }else if(location){
//     text=JSON.stringify(location)
//   }
//   console.warn("latitude:",latitude)
//   console.warn("longitude:",longitude)

const[state,setState]=useState({
  'latitude':37.4220936,
  'longitude':-122.083922 ,
  'latitudeDelta':LATITUDE_DELTA,
  'longitudeDelta':LONGITUDE_DELTA,
});
useEffect(()=>{
  _onMapReady();

},[_onMapReady]);
const _onMapReady = useCallback(async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== `granted`) {
        setErrorMsg('Permission to access location was denied');
        return;
  }
  const location = await Location.getCurrentPositionAsync({});
  setState({
    ...state,
    'latitude': location.coords.latitude,
    'longitude': location.coords.longitude
  });
 
   console.log(`This is current location`, location.coords.latitude, location.coords.longitude);
}, [state]);
useEffect(()=>{
  if(!state || !destination)
  return;
  mapRef.current.fitToSuppliedMarkers(['state','destination'],{
    edgePadding:{top:50,right:50,bottom:50,left:50},
  });
},[state,destination])

  return (
    <View style={styles.container} >
      <MapView
        mapType='mutedStandard'
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        style={styles.map}
        initialRegion={state}
        showsUserLocation={true}
        showsMyLocationButton={true}
        onMapReady={_onMapReady}
      >
        {state && destination &&(
          <MapViewDirections
          origin={state}
          destination={destination.description}
          apikey={GOOGLE_API_KEY}
          strokeColor='black'
          strokeWidth={3}
          />
        )}
  
      <Marker  
       coordinate={state}
       title="Origin"
       description={state.description}
       identifier="Origin"
       />
  
      
  
      </MapView>

    </View>
  );
}
export default Map

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
   
    
  },
  button:{
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    bottom:10,
    paddingVertical:15,
    paddingHorizontal:50,
    marginHorizontal:10,
    borderRadius:4,
    elevation:3,
    backgroundColor:COLORS.darkBlue
    
  },
});
