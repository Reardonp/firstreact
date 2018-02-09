import React, { Component } from 'react';
import {Text, Button, View, } from 'react-native';
import api from '../utils/api';

export default class SecondScreen extends Component {

    static navigationOptions = {
        title: 'Second Screen',
      };
      constructor(props){
        super(props);
        this.state = {
            jsonData: [],
            itemStuff: ''
    
        }
    }
    
    componentWillMount(){
        api.getItems().then((res) => {
            //console.log(res);
            this.setState({
                items: res.jsonData
            })
        });
    }
    
render(){
    //var{navigate}= this.props.navigation;
    //console.log(this.state.items);
    return(
        <View>
            <Text>Stuff: {this.state.jsonData}</Text>
        </View>


    );
}
}
