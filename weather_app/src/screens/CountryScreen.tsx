import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, StatusBar, Alert, Image, TouchableOpacity } from 'react-native'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { rootStackParams } from '../../App'
import axios from 'axios'
import { countryIf } from '../../Interfaces'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation } from '@react-navigation/native'

type Props = NativeStackScreenProps<rootStackParams, "CountryScreen">
const CountryScreen = ({ route }: Props) => {
    const[loading,setLoading]=useState<boolean>(false);
    const navigation = useNavigation<NativeStackNavigationProp<rootStackParams>>();

    const country = route.params?.country;
    const [countryInfo, setCountryInfo] = useState<countryIf>();
    const getCountry = ():void => {
        setLoading(true);
        axios.get<countryIf[]>(`https://restcountries.com/v2/name/${country}`)
            .then((r) => {
                setCountryInfo(r.data[0]);
                setLoading(false);
            })
            .catch((e) => {
                Alert.alert(`${country} not found`)
            })
    }
    useEffect(() => {
        getCountry();
    }, []);
    const handleSubmit = ():void=>{
      navigation.navigate("Weather",{capital:countryInfo?.capital})
    }
    return (
       <View style={styles.parrent}>
        {loading&&<Text>Loading...</Text>}
        {!loading && <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.detailsText}>Country Details</Text>
            </View>
            <View style={styles.imgtxt}>
                <Image
                    style={styles.flag}
                    source={{
                        uri: countryInfo?.flags?.png
                    }}
                />
                <Text style={styles.texts}>Capital : {countryInfo?.capital}</Text>
                <Text style={styles.texts}>Country's Population : {countryInfo?.population}</Text>
                <Text style={styles.texts}>Latitude:{countryInfo?.latlng[0]} deg</Text>
                <Text style={styles.texts}>Longitude:{countryInfo?.latlng[1]} deg</Text>
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                    <Text style={{color:"white"}}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>}
       </View>
    )
}

export default CountryScreen

const styles = StyleSheet.create({
    parrent:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    container: {
        marginTop: StatusBar.currentHeight,
        padding: 30,
        width:"100%",
        height:"100%"
    },
    details: {
        padding: 15,
        alignItems: "center",
        marginBottom: 30

    },
    detailsText: {
        fontWeight: "bold",
        fontSize: 20
    },
    flag: {
        width: 200,
        height: 200,
        marginBottom: "15%"
    },
    imgtxt: {
        marginTop: "16%",
        width: "100%",
        height: "100%",
        marginBottom: 10
    },
    texts: {
        marginBottom: "10%",
        color: "grey",
        fontSize: 18,
    },
    btn:{
       backgroundColor:"#8A2BE2",
       alignItems:"center",
       justifyContent:"center",
       marginTop:20,
       height:37,
       width:250,
       borderRadius:5
    }
})