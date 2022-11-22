
import {firebase}from 'firebase/app'
import 'firebase/firestore'
import { Alert } from 'react-native'
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth,database} from  "../config/fb"
import { useNavigation } from '@react-navigation/native';
const navigation=useNavigation();



export function registration(email,name,phone,password){

    try{
        // await firebase.auth().createUserWithEmailAndPassword(email,password);
     createUserWithEmailAndPassword(auth,email,password);
        const currentUser=firebase.currentUser;

        const database=firebase.firestore();

        db.collection("users")
            .doc(currentUser.uid)
            .set({
                email:currentUser.email,
                name:name,
                phone:phone,

            });
    }catch(err){
        Alert.alert("User Not Registered",err.message);
        console.log(err)
    }
}

export async function signIn(email,password){
    try{
        await firebase
        .auth()
        .signInWithEmailAndPasword(email,password);
        navigation.navigate('Tabs')
    }catch(err){
        Alert.alert("User Not Signed In",err.message);
    }
}

export async function logOut(){
    try{
        await firebase.auth().signOut();

    }catch(err){
        Alert.alert('User Not Signed Out',err.message);
    }
}