import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput} from 'react-native';

export default class TextInputs extends Component {
    static navigationOptions = {
        title: 'TextInput',
    };
    constructor(props){
        super(props);

        this.state = {text: ''};
    }

    render() {

        return (
            <View style={{padding:10, backgroundColor:'lightgray'}}>
            <TextInput style={{height:50}}
                       placeholder='Enter some text'
                       onChangeText={(text) => this.setState({text})}
                        />

            <Text style={{padding:10, fontSize:40}}>
            {this.state.text}
            </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('TextInput', () => TextInputs);
