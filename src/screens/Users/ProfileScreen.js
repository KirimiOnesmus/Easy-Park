import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Image,Dimensions } from 'react-native'
import React,{useState,useContext, useEffect}from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import  Constants  from 'expo-constants';
import COLORS from '../../consts/colors';
import {auth} from '../../config/fb'
import { useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {
    const{width,height}=Dimensions.get("window");
    const navigation=useNavigation()
    const [userData, setUserData] = useState(null)

    const logOut=()=>{
        auth
        .signOut()
        .then(()=>{
            navigation.replace("LoginScreen")
        })
        .catch(error=>alert(error.message))
    }
    

    const getUser=async()=>{
        await fb()
        .collection('users')
        .doc(route.params? route.params.userId:user.uId)
        .get()
        .then((documentSnapshot)=>{
            if(documentSnapshot.exists){
                console.log('UserData',documentSnapshot.data());
                setUserData(documentSnapshot.data());
            }
        })
    }
    useEffect(()=>{
        getUser();

    },[])

  return (
    <View style={styles.container}>
        <SafeAreaView>
            <ScrollView style={styles.profile}>
                <View style={styles.header}>
                    <Image 
                     source={{uri: userData ? userData.userImg || 'https://www.nicepng.com/ourpic/u2t4r5e6e6t4e6q8_generic-user-image-male-man-cartoon-no-eyes': 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg' }} 
                     style={{height:100,width:100,borderRadius:100/2,resizeMode:'contain'}}
                     />
                    <Text style={styles.name}>{userData ? userData.name :''}</Text>
                </View>

                <View style={styles.buttonsWrapper}>
                    <TouchableOpacity style={styles.button}
                    onPress={()=>navigation.navigate('EditProfileScreen')}
                    >
                        <Text style={styles.buttonText}>EDIT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={logOut}
                    >
                        <Text style={styles.buttonText}>LOGOUT</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.userDetails}>
                    <Text style={styles.detail}>Full Name:{userData ? userData.name : ''}</Text>
                    <Text style={styles.detail}>Phone Number:{userData ? userData.phone : ''}</Text>
                    <Text style={styles.detail}>Email: {userData ? userData.email:''}</Text>
                    <Text style={styles.detail}>Address:{userData ? userData.address:''}</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        top:Constants.statusBarHeight,
    },
    profile:{
        marginVertical:20,
        marginHorizontal:20,
  
    },
    header:{
        justifyContent: 'center',
        alignItems:'center',
        padding:20,
    },
    name:{
        paddingTop:10,
        fontSize:20,
        fontWeight:'bold'
    },
    buttonsWrapper:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        width:'100%'
    },
    button:{
        borderColor: '#2e64e5',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 6,
        paddingHorizontal: 14,
        marginHorizontal: 5,
        backgroundColor:COLORS.blue,
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
    },
    userDetails:{
        paddingVertical: 20,
        paddingHorizontal: 14,  
        marginVertical: 5,
    },
    detail:{
        paddingVertical:10,
        paddingHorizontal:4,
        fontSize:20,
        fontWeight:'400'
    }


})