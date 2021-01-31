import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import NewsHeader from '../Headers/NewsHeader'

export default class TopNews extends React.Component{
  goToHomeScreen = () => {
    this.props.navigation.navigate('HomeScreen');
  }
  
  render() {
    return(
      <View>
      <NewsHeader/>
      <Text style = {styles.text}> At the age of 13 Suhaan Khan has finally designed his first react native app Newsletter.</Text>
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
    fontSize:18,
    fontWeight:'bold',
    color:'red',
    justifyContent:0,
    marginTop:100
  },
  backText:{
   color:'white',
   fontWeight:'bold',
   fontSize:28,
   justifyContent:'center',
   alignSelf:'center',
   marginTop:8,
   marginLeft:-5
  },
  backView:{
    backgroundColor:'black',
    marginTop:-140,
    borderWidth : 4,
    borderRadius:25,
    borderColor:'red',
    height:59,
    width:100
  }
})