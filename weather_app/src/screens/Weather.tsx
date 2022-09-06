import { StyleSheet, Text, View, StatusBar, Alert,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { rootStackParams } from '../../App'
import { weatherIf } from '../../Interfaces'
import axios from 'axios'
type Props = NativeStackScreenProps<rootStackParams,"Weather">

const Weather = ({route}:Props) => {
  const capital = route?.params?.capital;
  const[loading,setLoading]=useState<boolean>(false);
  const[weather,setWeather] = useState<weatherIf>()
  const getWeather = ():void=>{
    setLoading(true);
    axios.get<weatherIf>(`http://api.weatherstack.com/current?access_key=d65506a65c5885df796975eeeee40c37&query=${capital}`)
    .then((r)=>{
      setWeather(r.data);
      setLoading(false);
    })
    .catch((e)=>{
      Alert.alert("Something went wrong");
    })
  }
  useEffect(()=>{
     getWeather();
  },[]);
  return (
   <View style={styles.parrent}>
    {loading&&<Text>Loading...</Text>}
    {!loading&& <View style={styles.container}>
       <View style={styles.details}>
                <Text style={styles.detailsText}>Weather Details</Text>
            </View>
            <View style={styles.imgdiv}>
            <Image
                    style={styles.flag}
                    source={{
                        uri: weather?.current?.weather_icons[0]
                    }}
                />
                <Text style={styles.txt}>Temprature : {weather?.current?.temperature} C</Text>
                <Text style={styles.txt}>Preception : {weather?.current?.precip} %</Text>
                <Text style={styles.txt}>Preception : {weather?.current?.wind_speed} kmph</Text>
            </View>
    </View>}
   </View>
  )
}

export default Weather

const styles = StyleSheet.create({
  parrent:{
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center"
},
  container:{
    marginTop: StatusBar.currentHeight,
    padding: 30,
    width:"100%",
    height:"100%"
  },
  details: {
      padding: 5,
      alignItems: "center",
      marginBottom: 30

  },
  detailsText: {
      fontWeight: "bold",
      fontSize: 20
  },
  flag:{
    width:150,
    height:150,
    marginBottom:"15%"
  },
  imgdiv:{
    marginTop:"60%",
    paddingLeft:30
  },
  txt:{
    marginBottom:"12%",
    color: "grey",
    fontSize: 18,
  }
})