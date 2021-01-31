import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import db from '../../config';
import {Dropdown} from 'react-native-dropdown-menu'


export default class Signup extends Component {
  
  constructor() {
    super();
    this.state = {
      name: '',
      phoneNumber: '',
      email: '',
      password: '',
      info: ''
    }
  }

  goToLoginScreen = () => {
    this.props.navigation.navigate('LogIn')
  }

   handleEmail = (text) => {
   this.setState({email:text})
 }

 handlePassword = (text) => {
   this.setState({password:text})
 }

  handleName = (name) => {
    this.setState({name:name})
  }

  createAccount = (name,email,pass) => {
   alert('Name :  ' + name + ',' + '  Email :  ' + email + ',' + '  Password :  ' + pass)
   var user = db.ref('Users/');
    user.update({
      'Name':name,
      'Password': pass,
      'Email': email,
    });
  }

   notFull = () => {
    if(this.state.email === '' || this.state.password === '' || this.state.name === '') {
       this.setState({
         info:'Information is not filled or not valid'
       });
       console.log(this.state.info)
      } else {
        this.props.navigation.navigate('HomeScreen')
      }
    } 

  render() {
    return(

      <View>
       <TextInput style = {styles.input}
         underlineColorAndroid = "transparent"              placeholder = " Full Name"
         placeholderTextColor = "#9a73ef"
         autoCapitalize = "none"
         onChangeText = {this.handleName}
       />
       <TextInput style = {styles.input2} 
       underlineColorAndroid = "transparent"              placeholder = " Phone Number"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
       />
             <TextInput style = {styles.input}
         underlineColorAndroid = "transparent"              placeholder = " Set your email"
         placeholderTextColor = "#9a73ef"
         autoCapitalize = "none"
         onChangeText = {this.handleEmail}
       />
       <TextInput style = {styles.input} 
       underlineColorAndroid = "transparent"              placeholder = " Set your password"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
       onChangeText = {this.handlePassword}
       />

       <Text style = {{color:'red',alignSelf:'center',fontSize:15,marginBottom:20}}> {this.state.info} </Text>

      <TouchableOpacity style = {styles.createAccount}  onPress = {() => this.createAccount(this.state.name,this.state.email,this.state.password) & this.notFull()}>
        <Text style = {styles.createAccountText}> Create Account </Text>
      </TouchableOpacity>

 <TouchableOpacity style = {styles.submitButton} onPress = {() => this.goToLoginScreen()}>
  <Text style = {styles.submitButtonText}> Go back to Login </Text>
 </TouchableOpacity>
      

      </View>
    )
  }

}

const styles = StyleSheet.create({
  input:{
   height:40,
   margin:20,
   width:250,
   borderColor:'red',
   borderWidth:2,
   alignSelf:'center'
  },
  input2:{
   height:40,
   margin:20,
   marginLeft:10,
   marginTop:0 ,
   marginBottom:20,
   width:150,
   borderColor:'red',
   borderWidth:2,
  },
  createAccount:{
    background:'red',
    width:316,
    height:40,
    padding:9,
    alignSelf:'center',
    marginTop:20,
  },
  createAccountText:{
    color:'white',
     fontSize:18,
     fontWeight:'bold',
     alignSelf:'center'
  },
  submitButtonText:{
      color: 'white',
      fontWeight:'bold',
      fontSize:18,
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
      borderRadius : 15,
   },
})