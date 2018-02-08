import React, { Component } from 'react';
import {Text, Button, View} from 'react-native';


export default class SecondScreen extends Component {

    static navigationOptions = {
        title: 'Second Screen',
      };
    
render(){
    //var{navigate}= this.props.navigation;

    return(
        <View>
            <Text>Hello World</Text>
        </View>


    );
}
}