import { ScrollView, StyleSheet, Text, View ,ImageBackground, TextInput,TouchableOpacity, SafeAreaView} from 'react-native'
import React ,{useState}from 'react'

import COLORS from '../../consts/colors'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import  Constants  from 'expo-constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';



const ProfileScreen = () => {
    // const{user,logout}=useContext(AuthContext);
    const[image,setImage]=useState(null);
    const [userData,setUserData]=useState(null)

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
          compressImageMaxWidth: 300,
          compressImageMaxHeight: 300,
          cropping: true,
          compressImageQuality: 0.7
        }).then(image => {
          console.log(image);
          setImage(image.path);
          this.bs.current.snapTo(1);
        });
      }
    
      const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          compressImageQuality: 0.7
        }).then(image => {
          console.log(image);
          setImage(image.path);
          this.bs.current.snapTo(1);
        });
      }
      renderInner = () => (
        <View style={styles.panel}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.panelTitle}>Upload Photo</Text>
            <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
          </View>
          <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
            <Text style={styles.panelButtonTitle}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
            <Text style={styles.panelButtonTitle}>Choose From Library</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.panelButton}
            onPress={() => this.bs.current.snapTo(1)}>
            <Text style={styles.panelButtonTitle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      );
      renderHeader = () => (
        <View style={styles.header}>
          <View style={styles.panelHeader}>
            <View style={styles.panelHandle} />
          </View>
        </View>
      );
    
      bs = React.createRef();
      fall = new Animated.Value(1);
    
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            Kirimi Onesmus
          </Text>
        </View>

             <View style={styles.InputContainer}>
               
                <TextInput
                    icon="user-o"
                    placeholder='Full Name'
                    style={styles.Input}
                />
            </View>
             <View style={styles.InputContainer}>
              <FontAwesome icon="fa-solid fa-envelope" color="#333333" size={20}/>
               
                <TextInput
                    icon=""
                    placeholder='Email Address'
                    style={styles.Input}
                />
            </View>
              <View style={styles.InputContainer}>
               <FontAwesome icon="fa-light fa-phone" color="#333333" size={20}/>
                <TextInput
                    placeholder='Phone Number'
                    style={styles.Input}
                />
            </View>
            <View style={styles.InputContainer}>
                <FontAwesome icon="fa-light fa-lock" color="#333333" size={20} />
                <TextInput
                    placeholder='Change Password'
                    style={styles.Input}
                />
            </View>
            <View style={styles.InputContainer}>
                <FontAwesome icon="fa-light fa-location-dot" color="#333333" size={20} />
                <TextInput
                    placeholder='Change Address'
                    style={styles.Input}
                />
            </View>
            <View style={{paddingHorizontal:30,marginVertical:20}}>
            <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                        height: 40,
                        width: '100%',
                        backgroundColor: COLORS.blue,
                        marginVertical: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius:5
                    }}>
                    <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>
                        Update
                    </Text>
                </TouchableOpacity>
            
            </View>

            </ScrollView> 
        </SafeAreaView>

    </SafeAreaProvider>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        top:Constants.statusBarHeight,
        alignContent:'center',
        marginVertical:30,
        marginHorizontal:10,



    },
    InputContainer:{
        marginVertical:10,
        
    },
    Input:{
        color: COLORS.black, 
        flex: 1,
        fontSize:18,
        fontWeight:'450',
        padding:10,
        borderWidth:1,
        borderRadius:5,
        backgroundColor:'white'
        
    },
    panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
      },
      panelTitle: {
        fontSize: 27,
        height: 35,
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
      panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
})