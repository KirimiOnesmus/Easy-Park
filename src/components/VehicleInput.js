
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../consts/colors';
// import {tw} from 'twrnc'
const VehicleInput = ({
    label,
    iconName,
    error,
    onFocus=()=>{},

    ...props
}

) => {
    const [isFocused,setIsFocused]=useState(false);
  return (

   
    <View style ={{marginBottom:20,marginHorizontal:10,}}>
      <Text style={{marginVertical:5,fontSize:18,color:'#080808',fontWeight:'450'}}>{label}</Text>
        <View style={[{height:60,paddingHorizontal:5,backgroundColor:'white',alignItems:'center',borderWidth:2,flexDirection:'row',borderRadius:5},{borderColor:error ?COLORS.red:isFocused ? COLORS.darkBlue:COLORS.light}]}>
            <Icon name={iconName} style={{fontSize:26,color:COLORS.darkBlue,marginRight:10}}/>
            <TextInput
            onFocus={()=>{
                onFocus();
                setIsFocused(true);
            }}
             onBlur={()=>{
                    setIsFocused(false);
                }}
            {...props}
            style={{color:'black', flex: 1,fontSize:20}}/>
        </View>
        {error &&(
         <Text style={{color:'red',fontSize:15, marginTop:7}}>{error}</Text>
          )}
    </View>
  )
}

export default VehicleInput

const styles = StyleSheet.create({})