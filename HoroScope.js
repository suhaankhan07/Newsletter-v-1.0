import * as React from 'react';
import {View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native';
import HoroscopeHeader from '../Headers/HoroscopeHeader';

export default class HoroScope extends React.Component{
  goToHomeScreen = () => {
    this.props.navigation.navigate('HomeScreen')
  }

 constructor() {
     super();
    this.state = {
     randomNumber: '',
     text:'',
     testYourLuck:'TEST YOUR LUCK !!',
     greetings:'Press the button and check how your day is going to go. Low number means bad, high number means awesome. Go ahead, spin it!!',
    }
  }

  getNumber = () => {
    var rand = Math.floor(Math.random() * 10) + 1
    this.setState({
      randomNumber: rand,
      text:''
    })

    if(rand === 1) {
      this.setState({
        text:'WORST DAY OF YOUR LIFE',
      })
    }

    
    if(rand === 2) {
      this.setState({
        text:'Dont go outside. You might be cursed',
      })
    }

    
    if(rand === 3) {
      this.setState({
        text:'Pretty sucky, might just want to sleep throught the day',
      })
    }

    
    if(rand === 4) {
      this.setState({
        text:'not that good but no need to be TOO afraid',
      })
    } 
    
    if(rand === 5) {
      this.setState({
        text:'Neither good or bad',
      })
    }

     if(rand === 6) {
      this.setState({
        text:'It will be a fine day',
      })
    }

     if(rand === 7) {
      this.setState({
        text:'Pretty good,NICE JOB, but is that the best that you can do? ',
      })
    }

     if(rand === 8) {
      this.setState({
        text:'It might as well be your birthday today. THIS IS CRAZY LUCK.',
      })
    }

     if(rand === 9) {
      this.setState({
        text:'MERRY CHRISTMAS. Its your lucky day',
      })
    }

     if(rand === 10) {
      this.setState({
        text:'BEST day of your entire life, it cant get better than this!!',
      })
    }
  
    console.log(rand);
  };

  afterPress = () => {
    this.setState({
      testYourLuck:'Done for today!!',
      greetings:'Come back tommorrow and spin again and let the button decide your fate'
    });
    }    

  render() {
    return(
      <View>
      <HoroscopeHeader/>

    <Text style = {{fontSize:15,fontWeight:'bold',alignSelf:'center',marginTop:25}}> {this.state.greetings} </Text>

    <TouchableOpacity style = {styles.button} onPress = {() => this.getNumber() & this.afterPress()}> <Text style = {styles.text}> {this.state.testYourLuck} </Text>  </TouchableOpacity>

    <Text style = {{color:'#2fd4b0',alignSelf:'center',fontWeight:'bold',fontSize:45,marginTop:20,}}> {this.state.randomNumber}</Text>
            
      <Text style = {styles.text}> {this.state.text} </Text>

        <TouchableOpacity style = {styles.backView} onPress = {() => this.goToHomeScreen()}> 
      <Text style = {styles.backText}> BACK </Text>
      </TouchableOpacity> 
      </View>
   )
  }
 }



const styles = StyleSheet.create({
  text:{
    alignSelf:'center',
    fontSize:16,
    padding:1,
    fontWeight:'bold',
    color:'red',
    justifyContent:'center',
    marginTop:25
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
    marginTop:-300,
    borderWidth : 4,
    borderRadius:25,
    borderColor:'red',
    height:50,
    width:100
  },
  button: {
    borderWidth:4,
    borderRadius:155,
    borderTopLeftRadius:14,
    borderLeftColor:'red',
    borderRightColor:'purple',
    borderTopColor:'green',
    borderBottomColor:'blue',
    width:160,
    height:70,
    marginTop:150,
    alignItems:'center',
    alignSelf:'center',
    backgroundColor:'#e0d3d3'
  }  
});