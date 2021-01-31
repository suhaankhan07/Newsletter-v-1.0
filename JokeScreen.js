import * as React from 'react';
import {View,Text,Button,TouchableOpacity,StyleSheet} from 'react-native';
import JokeHeader from '../Headers/JokeHeader'

export default class JokeScreen extends React.Component{
   displayAlerts = () => {
     alert('Because his math teacher was chasing him')
   }

   goToHomeScreen = () => {
     this.props.navigation.navigate('HomeScreen')
   }

  render() {
    return(
      <View>
      <JokeHeader/>
       <Text style = {styles.text}> Why did the Chicken cross the road?</Text>
        <TouchableOpacity style = {styles.button} onPress = {this.displayAlerts}> <Text style = {styles.text2}> Answer </Text> </TouchableOpacity>
        <TouchableOpacity style = {styles.backView} onPress = {() => this.goToHomeScreen()}> 
      <Text style = {styles.backText}> BACK</Text>
      </TouchableOpacity>
      </View>
   )
  }
 }

const styles = StyleSheet.create({
  text:{
    alignSelf:'center',
    fontSize:18,
    fontWeight:'bold',
    color:'red',
    justifyContent:0,
    marginTop:100
  },
  text2:{
    alignSelf:'center',
    fontSize:38,
    fontWeight:'bold',
    color:'white',
    justifyContent:0,
    marginTop:15
  },
  button:{
    backgroundColor:'black',
    width : 180,
    height: 80,
    marginTop:50,
    borderRadius:15,
    borderColor:'red',
    borderWidth:2,
    alignSelf:'center'
  },
  
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
