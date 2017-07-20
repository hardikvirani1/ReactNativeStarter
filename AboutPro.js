import React, {Component} from 'react';
import { AppRegistry, ScrollView, Dimensions, Text, Button, View, Image, TouchableHighlight,
    StyleSheet } from 'react-native';
const { width, height } = Dimensions.get("window");
import segmentNprogress from './segmentNprogress';
import {StackNavigator} from 'react-navigation';
import AboutStack from './AboutStack';
import props from './props';
import TextInput from './TextInput';
import LoginView from './LoginView';
import activityIndecator from './activityIndecator';
import collectionView from './collectionView';

export default class AboutPro extends Component{
    static navigationOptions = {
        tabBarLabel: 'About',
        header:null,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./images/login1_person.png')}
                style={{tintColor: tintColor, width:24, height:24}}
            />
        ),
    };

    constructor(props) {
        super(props);
    }

    render(){
        return(
           <MyStack/>
        );
    }
}

const MyStack = StackNavigator ({
    AboutStack: {screen: AboutStack},
    SegmentedControlIOS: {screen:segmentNprogress},
    Property :{screen:props},
    LoginView :{screen:LoginView},
    TextInput :{screen:TextInput},
    activityIndecator :{screen: activityIndecator},
    Collection :{screen:collectionView},
});

