import * as React from 'react';
import {View,StyleSheet,Text} from 'react-native';

export default class NewsHeader extends React.Component{
  render() {
    return(
      <View style = {{backgroundColor:'blue',marginTop:0,height:60,justifyContent:'center'}}> 
        <Text style = {styles.headerText}> Top News of the Month </Text>
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
