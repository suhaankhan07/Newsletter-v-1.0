import * as React from 'react';
import {Component} from 'react';
import {Image,Text,TouchableOpacity, StyleSheet, View} from 'react-native';
import db from '../../config'
import AppHeader from '../Headers/AppHeader'
import Welcome from '../Welcome'
import Login from './logIn'

 export default class HomeScreen extends React.Component { 
   
likePressed() {
  var like = db.ref('Ratings');
   like.update({
     'likePressed':this.state.like + 1,
   });
  }

dislikePressed() {
 var dislike = db.ref('Ratings/');
   dislike.update({
     'dislikePressed': this.state.dislike + 1,
   });
}

 goToJokeScreen = () => {
   this.props.navigation.navigate('JokeScreen')
 }

 
 goToHorscopeScreen = () => {
   this.props.navigation.navigate('HoroScope')
 }

 
 goToWeatherScreen = () => {
   this.props.navigation.navigate('Weather')
 }

 
 goToTopNewsScreen = () => {
   this.props.navigation.navigate('TopNews')
 }

 
 goToFactsScreen = () => {
   this.props.navigation.navigate('Facts')
 }

 gotoAboutMe = () => {
   this.props.navigation.navigate('AboutMe');
 }

    constructor() {
    super();
    this.state = {
      like: 0,
      dislike: 0,
    }
    }

  addLikes = () => {
    this.setState({
      like:this.state.like + 1
    })
  }

  addDislikes = () => {
    this.setState({
      dislike:this.state.dislike + 1
      })
  }

  weatherData() {
    var weather = db.ref('weatherData');
     weather.update({
         'weatherTimesClicked' : +3
       })

   this.setState({
     weather: this.state.weather + 1
     })
     
     weather.on("value",(data) => {
       var weatherData = data.val();
     })     
  }


 //likeButton
  render() {
  return(
  <View>
  <AppHeader/>
  <Welcome/>
  
  <TouchableOpacity style = {styles.aboutMe} onPress = {() => this.gotoAboutMe()}>
   <Text style = {styles.buttonText}> About Me </Text>
  </TouchableOpacity>

 <TouchableOpacity style = {styles.facts} onPress = {() => this.goToFactsScreen()}> 
       <Text style = {styles.buttonText}> Facts </Text>
   </TouchableOpacity>
 

  <TouchableOpacity style = {styles.button} onPress = {() => this.goToJokeScreen()}> 
      <Text style = {styles.buttonText}> Tell a Joke </Text>
    </TouchableOpacity>
  
 <TouchableOpacity style = {styles.button} onPress = {() => this.goToHorscopeScreen()}> 
      <Text style = {styles.buttonText}> Horoscope </Text> 
   </TouchableOpacity>
    
  <TouchableOpacity style = {styles.button} onPress = {() => this.goToWeatherScreen() & this.weatherData()}> 
     <Text style = {styles.buttonText}> Weather </Text>   
   </TouchableOpacity>
     
  <TouchableOpacity style = {styles.button} onPress = {() => this.goToTopNewsScreen()}> 
       <Text style = {styles.buttonText}> Top News </Text> 
   </TouchableOpacity>
  
  <Text style = {{marginLeft:80,marginBottom:-30,marginTop:30,color:'green',fontSize:18}}> {this.state.like} </Text>
  
  <Text style = {{marginLeft:230,marginBottom:-20,marginTop:10,color:'red',fontSize:18}}> {this.state.dislike} </Text>

<TouchableOpacity style = {{marginLeft:60,marginBottom:-50,marginTop:20}} onPress = {() => this.addLikes() & this.likePressed()}>      <Image
     style = {{
      width : 60,
      height : 60,
      marginLeft:5     
    }}
    source ={require('../../Images/thumbsUP.png')}
    />
      </TouchableOpacity> 

     
   <Text style = {{alignSelf:"center",marginTop:-20}}> Rate Us </Text>

   <TouchableOpacity style = {{marginLeft:210,marginTop:20}} onPress = {() => this.dislikePressed() & this.addDislikes()}>
   <Image 
    style = {{
      width : 60,
      height : 60,
      marginLeft:5     
    }}
     source ={require('../../Images/thumbsDown.jpg')}
   />
      </TouchableOpacity>

       <Text style = {styles.buttonText}> Visit my Instragram,Facebook, and Twitter Here </Text>

   </View>
  )
 }
}


const styles = StyleSheet.create({
  button:{
   justifyContent: 'center',
   alignSelf: 'center',
   borderWidth: 2,
   marginTop:60,
   backgroundColor: 'lightblue',
   borderRadius:15,
   width:170,
   height:60,
  },
  buttonText:{
    marginTop:0,
    margin:0,
    alignSelf:'center',
    fontWeight:'bold',
    color:'black'
  },
  aboutMe:{
    marginLeft:-200,
    borderWidth:3,
    borderLeftColor:'black',
    borderRightColor:'black',
    borderTopColor:'white',
    marginTop:-207,
    marginBottom:110, 
    width:100,
    height:30,  
    backgroundColor:'white',
    alignSelf:'center', 
  },
  facts:{
    marginLeft:20,
    borderWidth:3,
    borderLeftColor:'black',
    borderRightColor:'black',
    borderTopColor:'white',
    marginTop:-140,
    marginBottom:110, 
    width:100,
    height:30,  
    backgroundColor:'white',
    alignSelf:'center', 
  
  }
});
