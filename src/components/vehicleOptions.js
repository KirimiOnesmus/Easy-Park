import { FlatList, TouchableOpacity, View ,Text,Image} from 'react-native'
import tw from 'twrnc'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { selectOrigin } from '../slices/navSlice'
import { useSelector } from 'react-redux'

const DATA=[
    {
        id:"101",
        title:"Sedan",
        image:require('../assets/icons/sport-car.png'),
        screen:"RegistrationScreen",
    },
    {
        id:"201",
        title:"Bikes",
        image:require('../assets/icons/bycicle.png'),
        screen:"RegstrationScreen",
    },
    {
        id:"301",
        title:"Mini-Vans",
        image:require('../assets/icons/van.png'),
        screen:"RegistrationScreen",
    
    },
    {
        id:"401",
        title:"Buses",
        image:require('../assets/icons/bus-lane.png'),
        screen:"RegistrationScreen",
    
    },    {
        id:"501",
        title:"Trucks",
        image:require('../assets/icons/truck.png'),
        screen:"RegistrationScreen",
    
    },
    {
        id:"601",
        title:"Tractors",
        image:require('../assets/icons/tractor.png'),
        screen:"RegistrationScreen",
    
    },
   
];
const numColumns=2;

const vehicleOptions =()=>{
    const navigation =useNavigation();
    const origin = useSelector(selectOrigin)

    return (
       
     <FlatList
     data={DATA}
     keyExtractor={(item)=>item.id}
     style={{
        
        marginBottom:10,
        paddingHorizontal:25,
        

     }}
     numColumns={numColumns}
     renderItem={({item,index})=>
        <TouchableOpacity 
        style={{paddingVertical:6,paddingHorizontal:4}} onPress={()=>navigation.navigate(item.screen)}
          disabled={!origin}
        >
        
             
            <View 
            // style={{
            //     marginHorizontal:10,
            //     padding:15,
            //     marginTop:5,
            //     backgroundColor:"#f5f2f2",
            //     borderRadius:10

            //}}
            style={tw`${!origin && 'opacity-30'} mx-3 p-5 bg-gray-100 my-6`}
            >
              
                <Image
                    source={item.image}
                    key={index}
                    style={{width:100, height:100,resizeMode:"contain"}}
                
                />
            </View>

        </TouchableOpacity>
     }
      />

    )
  }

export default vehicleOptions


