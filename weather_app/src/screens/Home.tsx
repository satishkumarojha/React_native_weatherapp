import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { rootStackParams } from '../../App';
const Home = () => {
    const[country,setCountry]= useState<string>("");
    const navigation = useNavigation<NativeStackNavigationProp<rootStackParams>>();
   const handleSubmit = ():void=>{
      navigation.navigate("CountryScreen",{country});
      setCountry("");
   }
  return (
    <View style={styles.homeContainer}>
      <TextInput
      style={styles.input}
      selectionColor="grey"
       placeholder="Enter Country"
       autoCapitalize='none'
       autoCorrect={false}
       value={country}
       onChangeText={data=>setCountry(data)}
      />
       <TouchableOpacity
        style={[styles.buttonstyle,{backgroundColor:country?"#8A2BE2":"#73777B"}]}
        onPress={handleSubmit}
        disabled={country?false:true}
      >
        <Text style={{color:country?"#FFFDE3":"#F1EEE9"}}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    homeContainer:{
        width:"100%",
        height:"100%",
        // backgroundColor:"#EEF2E6",
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        width:"70%",
        height:60,
        padding:10,
        borderColor:"grey",
        borderWidth:2,
        borderRadius:4,
        color:"grey",
        
    },
    buttonstyle:{
        marginTop:50,
        alignItems:"center",
        paddingHorizontal:28,
        paddingVertical:10,
        borderRadius:5,
        
    }
})