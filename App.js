import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

// import screens files
import HomeScreen from './components/Screens/HomeScreen'
import JokeScreen from './components/Screens/JokeScreen'
import HoroScope from './components/Screens/HoroScope'
import TopNews from './components/Screens/TopNews'
import Weather from './components/Screens/Weather'
import Facts from './components/Screens/Facts'
import AboutMe from './components/Screens/aboutMe'
import LogIn from './components/Screens/logIn'
import Signup from './components/Screens/Signup'


export default class App extends React.Component { 

  render() {
    return (
      <View>
      <AppContainer/>
      </View>
    );
  }
}



var AppNavigator = createSwitchNavigator({
  LogIn:LogIn,
  Signup:Signup,
  HomeScreen:HomeScreen,
  JokeScreen: JokeScreen,
  HoroScope:HoroScope,
  Weather:Weather,
  TopNews:TopNews,
  Facts:Facts,
  AboutMe:AboutMe,
});

const AppContainer = createAppContainer(AppNavigator)