import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
const window = Dimensions.get('window');
const background = require("./images/login1_bg.png");
const mark = require("./images/login1_mark.png");

export default class LoginView extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: null,
            password: null
        };
    }
    static navigationOptions = {
        title: 'LoginVIew',
    };

    getUserName = (username) => {
        this.setState({ username: username });
    };

    getPassword = (password) => {
        this.setState({ password: password });
    };

    setLogin = (username, password) => {
        //alert('username: ' + username + ' password: ' + password)
    };

    render() {
        return (
            <ScrollView>
            <View style={{flex:1, flexDirection:'row'}}>
                <View style={styles.backView}>
                <Image source={background} style={{width:window.width, height:window.height}}>

                    <View>
                        <Image source={mark} style={{marginLeft:window.width*0.33,marginTop:20,
                                                       width:window.width/3, height:window.height*.2}}/>
                    </View>

                    <TextInput style={styles.textInput}
                               placeholder='Enter username'
                               placeholderTextColor = "lightgray"
                               onChangeText={this.getUserName} />

                    <View style={{backgroundColor: 'white', width:window.width*.9, height:1,marginTop:-window.width*.03,
                        marginLeft:window.width*.05}} />

                    <TextInput style={styles.textInput}
                               placeholder='Enter password'
                               placeholderTextColor = "lightgray"
                               onChangeText={this.getPassword} />

                    <View style={{backgroundColor: 'white', width:window.width*.9, height:1,marginTop:-window.width*.01,
                        marginLeft:window.width*.05}} />

                    <TouchableOpacity
                        style = {styles.button}
                        onPress = { () => this.setLogin(this.state.username, this.state.password)}>

                        <Text style = {styles.submitButtonText}>Login</Text>

                    </TouchableOpacity>

                {/*<Text style={{padding:10, fontSize:40}}>
                    {this.state.text}
                </Text>*/}
                </Image>
                </View>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    texted:{
        textAlign:'center',
        fontSize:20,
        margin: 15,
        borderRadius:6,
        padding:4
    },
    textInput:{
        fontSize: 19,
        color:'black',
        height:50,
        padding:10,
        margin: 15
    },
    button:{
        backgroundColor: 'lightgray',
        borderRadius:6,
        margin: 15,
        height: 50,
        padding:15
    },
    submitButtonText:{
        color:'black',
        textAlign:'center',
        fontSize:19
    }
});

AppRegistry.registerComponent('LoginView', () => LoginView);
