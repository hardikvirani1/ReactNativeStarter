import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

class Name extends Component {
    static navigationOptions = {
        title:'Property',
    };
    constructor(props){
        super(props);
    }

    render() {
        return(
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class nameEx extends Component {
    render() {
        return(
            <View style={{alignItems:'center',marginTop:20}}>
                <Name name="john" />
                <Name name="smith" />
                <Name name="jack" />
            </View>
        );
    }
}

AppRegistry.registerComponent('nameEx', () =>nameEx);