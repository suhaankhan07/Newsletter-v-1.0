import * as React from 'react';
import {Component} from 'react';
import axios from 'axios';
import {View, TouchableOpacity,Text,StyleSheet} from 'react-native'

export default class WeatherScreen extends Component {
constructor() {
  super();
  this.state = {
    weather:'',
  }
 }
 
 getWeather = async () => {
var url = 'https://fcc-weather-api.glitch.me/api/current?lat=30&lon=-97.733330';
return fetch(url)
.then(response => response.json())
.then(responseJson => {
this.setState({
weather: responseJson,
});
})
.catch(error => {
console.error(error);
});
};

 componentDidMount = () => {
   this.getWeather();
 }


render() {
  if(this.state.weather === '') {
    return(
      <View style = {{marginTop:30,alignSelf:'center'}}> 
       <Text> Loading... </Text>
      </View>
    )
  } else {
    return(
      <View style = {{marginTop:120,alignSelf:'center'}}> 
  
      <Text style = {{fontSize:32,fontWeight:'bold',alignSelf:'center',color:'red',marginBottom:10}}> Weather Type:  {this.state.weather.weather[0].main} </Text>
  
   <Text style = {{fontSize:22,alignSelf:'center',fontWeight:'bold',color:'red',marginBottom:20}}> Temperature: {this.state.weather.main.temp} °C </Text>
  
      <Text style = {styles.weatherText}> Max Temperature : {this.state.weather.main.temp_max} °C </Text>
   
      <Text style = {styles.weatherText}> Air Pressure: {this.state.weather.main.pressure} </Text>
   
      <Text style = {styles.weatherText}> Humidity: {this.state.weather.main.humidity} </Text>
      </View>
    )
   }
  }
 }

 const styles = StyleSheet.create({
   weatherText: {
     fontSize: 15,
     color:'#1daade',
     fontWeight:'bold', 
     alignSelf:'center'
   },
 })
