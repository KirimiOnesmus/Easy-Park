import React,{useEffect,useState} from 'react';
import { StyleSheet,KeyboardAvoidingView,Platform} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
// import 'react-native-getsture-handler'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/store';
//Screens
import RegisterScreen from './src/screens/Users/RegisterScreen';
import LoginScreen from './src/screens/Users/LoginScreen';
import EditProfileScreen from './src/screens/Users/EditProfileScreen'
import Tabs from './src/Navigations/Tabs'
import Payment from './src/screens/Parking/Payment';
import RegistrationScreen from './src/screens/Parking/RegistrationScreen';


//Firebase

export default function App() {
  const Stack = createNativeStackNavigator();


  return (

    <Provider store={store}>
          <NavigationContainer>
            <SafeAreaProvider>
              <KeyboardAvoidingView 
              behavior={Platform.OS==="ios"?"padding":"height"}
              style={{flex:1}}> 

              <Stack.Navigator
              initialRouteName='LoginScreen'
              screenOptions={{
                headerShown:false,
              }}
              >
                
                    <Stack.Screen name="Tabs" component={Tabs} 
                    options={{headerShown:false}}/>
                     <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown:false}}/>
                     <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
                     <Stack.Screen name='EditProfileScreen' component={EditProfileScreen} options={{headerShown:false}}/>
                     <Stack.Screen name='Payment' component={Payment} options={{headerShown:false}}/>
                     <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} options={{headerShown:false}}/>
                  </Stack.Navigator>

              </KeyboardAvoidingView>
            
            </SafeAreaProvider>
      
         </NavigationContainer>
    </Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
