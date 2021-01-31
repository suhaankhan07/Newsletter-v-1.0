import * as React from 'react';
import {View,Text,Button,TouchableOpacity,StyleSheet} from 'react-native';
import axios from 'axios';
import WeatherScreen from './WeatherAPI'
import WeatherHeader from '../Headers/WeatherHeader'

export default class Weather extends React.Component{
  goToHomeScreen = () => {
    this.props.navigation.navigate('HomeScreen')
  }  
     
  render() {
    return(
      <View>
      <WeatherHeader/>
      <WeatherScreen/>
      <TouchableOpacity style = {styles.backView} onPress = {() => this.goToHomeScreen()}> 
      <Text style = {styles.backText}> BACK </Text>
      </TouchableOpacity>
      </View>
   )
  }
 }
  

const styles = StyleSheet.create({
 /* text:{
    alignSelf:'center',
    fontSize:18,
    fontWeight:'bold',
    color:'red',
    justifyContent:0,
    marginTop:100
  },*/
  backText:{
   color:'white',
   fontWeight:'bold',
   fontSize:20,
   justifyContent:'center',
   alignSelf:'center',
   marginTop:8,
   marginLeft:-5
  },
  backView:{
    backgroundColor:'black',
    marginTop:-220,
    borderWidth : 4,
    borderRadius:25,
    borderColor:'red',
    height:50,
    width:100
  }
})