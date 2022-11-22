
import { StyleSheet, Text, View, ActivityIndicator, useWindowDimensions,}  from 'react-native'
import React from 'react'


const Loader = (
  {visible=false}) => {
  const{height,width}=useWindowDimensions();
  return visible && 
    <View style={[{position: 'absolute',zIndex:10,backgroundColor:'black',justifyContent:'center',opacity:0.5},{height,width}]}>
         {/* style={absolute,height,width} */}
     <View style={{height:70,backgroundColor:'white',marginHorizontal:50,borderRadius:5,flexDirection:'row',alignItems:'center',paddingHorizontal:20}}>
        <ActivityIndicator size='large' style={{color:'blue'}}/>
        <Text  style={{marginLeft:10,fontSize:16,color:'white'}}>Registering</Text>
     </View>
    </View>;
  
}

export default Loader

const styles = StyleSheet.create({})