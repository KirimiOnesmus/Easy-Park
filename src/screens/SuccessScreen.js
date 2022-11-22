import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Constants from 'expo-constants'
import tailwind from 'twrnc'

import { useNavigation } from '@react-navigation/native';

const SuccessScreen = ({ route }) => {
    const { data } = route.params;
    const navigation = useNavigation()

    return (
        <View style={tw`bg-white h-full justify-center`}>
  
            <View style={tw`self-center`}>
                <View style={tw`p-8 w-full `}>
                    <Image
                        source={require('../assets/icons/parked.jpg')}
                        style={tw`w-60 h-40`}
                    />
                </View>
                <View style={tw`p-8 text-center self-center`}>
                    <Text style={tw`font-bold text-lg mb-4 text-center`}>Your {data?.title} spot has been booked.</Text>
                </View>

            </View>
                    {/* <View>
                        <TouchableOpacity
                            style={tailwind`bg-black py-3 m-3 rounded-lg`}
                       onPress={()=>{
                        navigation.navigate("DirectionScreen")
                       }}
                        >
                            <Text style={tailwind`text-center text-white text-xl`}>View Directions</Text>
                        </TouchableOpacity>
                    </View> */}
          
        </View>
        
    );
}

export default SuccessScreen;