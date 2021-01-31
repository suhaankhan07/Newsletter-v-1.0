import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import FactsHeader from '../Headers/FactsHeader'

 export default class Facts extends React.Component {
   goToHomeScreen = () => {
    this.props.navigation.navigate('HomeScreen')
  }
  
   
    render() {
      return(
        <View>
        <FactsHeader/>
       <TouchableOpacity style = {styles.backView} onPress = {() => this.goToHomeScreen()}> 
      <Text style = {styles.backText}> BACK </Text>
      </TouchableOpacity>   
      
        <Text> </Text>
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
  backText:{
   color:'white',
   fontWeight:'bold',
   fontSize:20,
   justifyContent:'center',
   alignSelf:'center',
   marginTop:5,
   marginLeft:0
  },
  backView:{
    backgroundColor:'black',
    marginTop:30,
    borderWidth : 4,
    borderRadius:25,
    borderColor:'red',
    height:45,
    width:100
  }
})