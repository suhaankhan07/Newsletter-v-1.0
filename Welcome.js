import React, { Component } from "react";
import { Animated, Image,Text, View, StyleSheet, Button } from "react-native";
import db from '../config'

class Welcome extends Component {
  constructor() {
  super();
  this.state = {
    fadeAnimation: new Animated.Value(0),
    hi:'',
    bye : '', 
    seconds:'',
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
    this.updateAttendance();
  }

  updateAttendance = () => {
    var today = new Date();

    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    if(day === 1) {
      day = '1st'
    } else if(day === 2){
      day = '2nd'
    } else if(day === 3) {
      day = '3rd'
    } else {
      day = day + 'th'
    }
     

    if(month === 1) {
     month = 'January'  
    } else if(month === 2) {
      month = 'February'
    } else if(month === 3) {
      month = 'March'
    } else if(month === 4) {
      month = 'April'
    } else if(month === 5) {
      month = 'May'
    } else if(month === 6) {
      month = 'June'
    } else if(month === 7) {
      month = 'July'
    } else if(month === 8) {
      month = 'August'
    } else if(month === 9) {
      month = 'September'
    } else if(month === 10) {
      month = 'October'
    } else if(month === 11) {
      month = 'November'
    } else {
      month = 'December'
    }

    if(hour > 12) {
       hour = hour - 12;
    }

    if(hour <= 9) {
     hour = '0' + hour
    }

    if(minute <= 9) {
     minute = '0' + minute
    }

    if(second <= 9) {
     second = '0' + second
    }


     today = month + '-' + day + '-' + year 
   var time = hour + ':' + minute
   var sec = second 

   var todayRef = db.ref('today/');
     todayRef.update({
       'Today':today,
       'Time':time,
     })

    this.setState({
      hi:today,
      bye:time,
      seconds:sec,
    })

  }

  render() {
    return (
      <View style={styles.viewStyle}>
     
       <Text style = {styles.welcome}>
       Welcome!!
       </Text>

       <Text style = {styles.date}>
        {this.state.hi}       
       </Text>

        <Text style = {styles.time}>
        {this.state.bye}       
       </Text>

       <Text style = {styles.sec}>
        {this.state.seconds}
       </Text>
      

        <View style={styles.buttonRow}>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle:{
   flex:1,
  },
  date:{
   color:'orange',
   fontWeight:'bold',
   fontSize:38 ,
   alignSelf:'center',
   marginBottom:25, 
   marginTop:52,
  },
  time:{
   color:'red',
   fontWeight:'bold',
   fontSize:30 ,
   alignSelf:'center',
   marginBottom:10,
   marginLeft:2,
   marginTop:-20,
  },
  sec:{
   color:'#A3A205',
   fontWeight:'bold',
   fontSize:20 ,
   alignSelf:'center', 
   marginTop:-36,
   marginLeft:102,
   marginBottom:27,
  },
  welcome:{
    color:'black',
    marginBottom:-48,
    marginTop:50,
    fontSize:38,
    fontWeight:'bold',
    alignSelf:'center',
    alignItems:'center',
    
  }
});

export default Welcome;