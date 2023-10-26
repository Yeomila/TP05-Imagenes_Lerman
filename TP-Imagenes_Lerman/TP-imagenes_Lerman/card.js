import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card()
{
    
    return(
    <><div style={{backgroundColor: "green", borderRadius: 10}}><Image style={{ width: 400, height: 400, marginBottom: 15}} source={require("./imgs/coffee1.jpeg")}/>
    <Text style={{textAlign: 'center'}}>Mocha</Text></div></>


    )
}