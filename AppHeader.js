import * as React from 'react';
import {Animated,Text,View,StyleSheet} from 'react-native'

export default class AppHeader extends React.Component{

  constructor() {
  super();
  this.state = {
    fadeAnimation: new Animated.Value(0)
 };
 }
  fadeIn = () => {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 1,
      duration: 3600
    }).start();
  };

  componentDidMount = () => {
    this.fadeIn();
  }

  render() {
    return(
      <View style = {{backgroundColor:'blue',marginTop:0,height: 70,justifyContent:'center'}}>
       <Animated.View
        style = {[
           {
            opacity: this.state.fadeAnimation
           }
        ]}
      >

        <Text style = {styles.headerText}> Monthly Newsletter </Text>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerText:{
    padding:10,
    alignSelf:'center',
    color:'white',
    fontSize:28,
    fontWeight:'bold'
  },
})