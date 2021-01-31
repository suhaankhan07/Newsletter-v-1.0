import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput,Image} from 'react-native';
import db from '../../config';


export default class Login extends Component {
   goToSignupScreen = () => {
   this.props.navigation.navigate('Signup')
 }
 
 constructor() {
   super();
   this.state = {
     email: '',
     password: '',
     info: '',
   }
 }

 handleEmail = (text) => {
   this.setState({email:text})
 }

 handlePassword = (text) => {
   this.setState({password:text})
 }

  login = (email, pass) => {
    alert('email: ' + email + '   &&&   ' + ' password: ' + pass)
    var unknown = db.ref('???');
    unknown.update({
      'email':email,
      'password':pass,
    });
    unknown.on("value",(data) => {
     var unknownData = data.val();
    var knowledge = [];

   for (var i in unknownData) {
    knowledge.push(unknownData[i]);
    }
    console.log(knowledge[i])
    })

  }
  
  notFull = () => {
    if(this.state.email === '' || this.state.password === '') {
       this.setState({
         info:'Information is not filled or not valid'
       });
       console.log(this.state.email)
      } else {
        this.props.navigation.navigate('HomeScreen')
      }
    } 

  render(){
    return (
    
        <View style = {styles.container}> 
         <TextInput style = {styles.input} 
         underlineColorAndroid = "transparent"              
         placeholder = " Email"
         placeholderTextColor = "#9a73ef"
         autoCapitalize = "none"
         onChangeText = {this.handleEmail}
         />  

         <TextInput style = {styles.input}
         underlineColorAndroid = "transparent"
         placeholder = " Password"  
         placeholderTextColor = "#9a73ef"
         secureTextEntry = {true}
         autoCapitalize = "none"
         onChangeText = {this.handlePassword}
         />

         <TouchableOpacity style = {styles.submitButton} onPress = {() => this.login(this.state.email,this.state.password) & this.notFull()}> 
          <Text style = {styles.submitButtonText}>  Log in </Text>
         </TouchableOpacity>

        <TouchableOpacity style = {styles.signup} onPress = {this.goToSignupScreen}>
         <Text style = {styles.signupText}> Sign up </Text>
          </TouchableOpacity>

        <Text style = {{color:'red',alignSelf:'center',fontSize:15}}> {this.state.info} </Text> 

          <TouchableOpacity style = {styles.logIn} onPress = {() => this.goToHomeScreen()}>
        <Text style = {styles.guestText}> Visit as a guest </Text>
      </TouchableOpacity>  
     
     <Image 
    style = {{
      width : 200,
      height : 250,
      marginLeft:5     
    }}
     source ={require('../../Images/manSittingOnCouch.png')}
   />

        </View>
    );
  }
}

const styles = StyleSheet.create({
  logIn:{
    borderWidth:6,
    borderRadius:25,
    borderLeftColor:'red',
    borderRightColor:'purple',
    borderTopColor:'green',
    borderBottomColor:'blue',
    width:180,
    height:50,
    margin:50,
    alignItems:'center',
    alignSelf:'center',
    backgroundColor:'#ff9500',
  },
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 20,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      fontWeight:'bold',
      fontSize:18,
      textShadowColor:'brown',
      textShadowRadius:4,
   },
   guestText:{
     fontWeight:'bold',
     margin:9,
     color:'white',
     fontSize:19,
     textAlignVertical:'center',
     textShadowColor:'black',
     textShadowRadius:4,
   },
   signup:{
    alignSelf:'center',
    justifyContent:'center',
    background:'red',
    width:'89%',
    height:40,
    padding:10,
    marginLeft:1,
    borderColor:'black',
    borderWidth:2
   },
   signupText:{
     color:'white',
     fontSize:18,
     fontWeight:'900',
     textShadowColor:'black',
     textAlignVertical:'center',
     textTransform:'none',
     textShadowRadius:4,
   }
});