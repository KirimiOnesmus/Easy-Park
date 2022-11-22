 import { StyleSheet, Text, View,TextInput } from 'react-native'
 import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors'
 
 const Inputs = ({
    label,
    iconName,
    error,
    password,
    onFocus=()=>{},
    ...props
 }) => {
    const [hidePassword, setHidePassword] =useState(password);
    const [isFocused, setIsFocused] = useState(false);
   return (
     <View>
        <Text style={styles.label}>{label}</Text>
       <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: 'center',
          },
        ]}>
        <Icon
          name={iconName}
          style={{color: COLORS.darkBlue, fontSize: 22, marginRight: 10}}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: COLORS.black, flex: 1,fontSize:18,fontWeight:'450'}}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: COLORS.darkBlue, fontSize: 22}}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: COLORS.red, fontSize: 12}}>
          {error}
        </Text>
      )}
     </View>
   )
 }
 
 export default Inputs
 
 const styles = StyleSheet.create({
    label: {
        marginVertical: 10,
        fontSize: 16,
        color: COLORS.grey,
        fontWeight:'bold'
      },
      inputContainer: {
        height: 55,
        backgroundColor: COLORS.light,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 2,
        borderRadius:5
      },
 })