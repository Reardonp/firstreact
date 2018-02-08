/*
*TODO***************************************************
* Want to try to open camera roll from this page. 
* Try to open camera from this page
********************************************************
*/

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, CameraRoll, ScrollView, ImageBackground } from 'react-native';
import{Button, Header} from 'react-native-elements';
import {Drawer} from 'native-base';
import SideBar from './sidebar';
import {StackNavigator} from 'react-navigation';
import NewScreen from './screens/newscreen';

const Navigation = StackNavigator({
    First: {screen: NewScreen},
    Home: {screen: HomeScreen},
  });
export default class HomeScreen extends React.Component {

  constructor(){
    super();
  
    this.state = {  
        TextHolder:"Don't Press that button"
    }
  
  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  }
  render() {

    return (
      <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<SideBar navigator={this.navigator} />}
      onClose={() => this.closeDrawer()} >
      <ImageBackground source={require('./images/bg.jpg')} style={styles.containerBG}>
      <Header 
      backgroundColor='rgba(0, 190, 250, 0.20)'
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: () => this.openDrawer(),
     }}          
     centerComponent={{ 
      text:'You got chair',

      style:{
      color:'white',
      }
    }}
    />
      <View style={styles.container}>
      <View style={styles.sectionOne}>
        <Text style={styles.textOnPage}> {this.state.TextHolder} </Text>
      </View>
      <View style = {styles.sectionTwo}>
        <Button 
        onPress={()=>this.props.navigation("First")}
        title="Press it"
        backgroundColor="darkgray"  
        color='white'
        rounded={true}        
        accessibilityLabel=""
        />
      </View>
      </View>

      </ImageBackground>
      </Drawer>

    );
  }
  randomDarkness=()=>{
 
  }
  buttonClick=()=>{
    //alert(2+2 + "hello world")
    this.setState({TextHolder: "Way to go Asshole"})
    setTimeout(() => this.setState({TextHolder: "Dont Press It Again"}), 5000);   
  };
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