

import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState }from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Alert  } from 'react-native'
import tailwind from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin, selectTravelTimeInformation, setGarageDestination } from '../slices/navSlice'
import { SafeAreaView } from 'react-native-safe-area-context'


const data = [
    {
        id: "Garage-123",
        title: "Gizmo parking spot",
        multiplier: 1,
        prices:"20/hr",
       coords:{
            lat:37.0856508,
            lng:-1.0504578
        }
    },
    {
        id: "Garage-XL-456",
        title: "Mangoci Garage",
        multiplier: 1.2,
        prices:"30/hr",
       coords:{
            lat:37.0856508,
            lng:-1.0504578,
        }
    },
    {
        id: "Garage-123",
        title:"Gucini Auto Garage",
        multiplier: 1.75,
        prices:"50/hr",
       coords:{
            lat:37.0856508,
            lng:-1.0504578
        }
    },
    {
        id: "Garage-M-125",
        title:"Car Park",
        multiplier: 1.8,
        prices:"70/hr",
       coords:{
            lat:37.0856508,
            lng:-1.0504578
        }

    },
    {
        id: "Garage-T-234",
        title:"Parking Lot",
        multiplier: 1.85,
        prices:"100/hr",
       coords:{
            lat:37.0856508,
            lng:-1.0504578,
        }
    },
    {
        id: "Garage-C-678",
        title:"Highway Motors Ltd",
        multiplier: 1.9,
        prices:"120/hr",
       coords:{
            lat:37.072683,
            lng:-1.0409027
        }
    },
    {
        id: "Garage-M-678",
        title:"Kenyatta Parking Lot",
        multiplier: 1.9,
        prices:"140/hr",
       coords:{
            lat:37.0610985,
            lng:-1.0382022
        }
    },
    {
        id: "Garage-B-678",
        title:"Magoko Parking Lot",
        multiplier: 1.9,
        prices:"200/day",
       coords:{
            lat:37.0610985,
            lng:-1.0382022
        }
    },
    {
        id: "Garage-678",
        title:"Reserved Parking Lot",
        multiplier: 1.9,
        prices:"300/day",
       coords:{
            lat:37.0610985,
            lng:-1.0382022
        }
    },
    
]

// const SEARCH_CHARGE_RATE = 1.5

const GarageScreen= () => {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const dispatch=useDispatch();
     

    useEffect(() =>{
        if(!origin || !destination) navigation.push('MapScreen')
    }, [origin, destination])


    const onChoose = () =>{
        if(!selected) return Alert.alert('Please select a ride option')

        navigation.push('SuccessScreen', { data: {...selected}})
        dispatch(setGarageDestination({
            location:data.coords
        }))

    }

    return (
        <SafeAreaView>
        <View style={tailwind`bg-white h-full`}>
          
            <Text 
        style={tailwind`text-center text-xl font-bold py-5`}>Select A Garage {travelTimeInformation?.distance.text}</Text>
            
            <View style={tailwind`flex-1 mt-4 mx-6`}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={tailwind`flexRow h-20 ${selected?.id === item.id && 'bg-gray-100'} `}
                            onPress={() => setSelected(item)}
                        >

                            <View style={tailwind`flex-row items-center justify-between flex-1 p-4 `}>
                                <View style={tailwind``}>
                                    <Text style={tailwind`text-xl font-bold text-black`}>{item.title}</Text>
                                    {/* <Text style={tailwind`text-gray-600 text-lg`}>{travelTimeInformation?.duration?.text} Travel time</Text> */}
                                </View>
                                <Text style={tailwind`text-gray-800 texl-lg`}>

                                    KSh{item.prices}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View>
                <TouchableOpacity
                    style={tailwind`bg-black py-3 m-3 rounded-lg ${!selected && 'bg-gray-300'}`}
                    disabled={!selected}
                    onPress={onChoose}
                >
                    <Text style={tailwind`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>

           

        </View>
        </SafeAreaView>

    )
}

export default GarageScreen

const styles = StyleSheet.create({
    // image: {
    //     width: 100,
    //     height: 100,
    //     resizeMode: 'contain'
    // },

})