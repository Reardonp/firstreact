/*
*TODO***************************************************
* Want to try to open camera roll from this page. 
* Try to open camera from this page
********************************************************
*/

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, CameraRoll, ScrollView, ImageBackground } from 'react-native';
import{Button, Header} from 'react-native-elements';
import {StackNavigator} from 'react-navigation';
import NewScreen from './screens/newscreen';
import SecondScreen from './screens/secondscreen';

const AppNavigator = StackNavigator({
  First: {screen: NewScreen},
  Second: {screen: SecondScreen},
});
export default class App extends React.Component {
  render(){
    return(
      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  containerBG:{
    flex:1,
    height:"100%",
    width:"100%",
  },
  overlayBg:{
    flex:1,
  },
  textOnPage:{
    paddingTop: "0%",    
    fontSize: 20,
    color: 'white',
    flex:1,
  },
  sectionOne:{
    height: "50%",
    width:"100%",
    alignItems: 'center', 

  },
  sectionTwo:{
    width:"50%",
  }
});

//export default Navigation;