import React, {Component} from 'react';
import { AppRegistry, Text, Button, View, Image,
    TouchableHighlight, StyleSheet, DrawerLayoutAndroid } from 'react-native';
import { DrawerNavigator, TabNavigator } from 'react-navigation';
import flatListView from './flatListView';
import pickerView from './pickerData';
import apiCallGenerate from './apiCallGenerate';
import webViewData from './webViewData';
import LazyloadScrollExample from './LazyloadListExample';
import AboutPro from './AboutPro';
import calc from './CalculatorDesign';
import firebaseLogin from './Component/FirebaseDB';
import albumList from './Component/AlbumList';

export default class ChatScreen extends Component {

    static navigationOptions = {
        header:null,
        drawerLabel: 'Profiles',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./images/login1_person.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    constructor(props){
        super(props);
    }

    componentWillMount(){}

    render() {
        return (
                <MyApp/>
        );
    }
}

class About extends Component{
    static navigationOptions = {
        header:null,
        drawerLabel: 'About',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./images/login1_person.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return(
            <View style={{flex:1,}}>
                <View style={{flex:.25, flexDirection:'row', paddingVertical:18, backgroundColor:'blue',opacity:0.4,
                    paddingHorizontal:13, }}>
                    <TouchableHighlight onPress={()=>{this.props.navigation.navigate('DrawerOpen');}}
                                        style={{ width:35, height:35}}>
                        <Image source={require('./images/menu-three-horizontal-lines-symbol.png')}
                               style={{width:25, height:20, tintColor:'white'}}/>
                    </TouchableHighlight>
                    <View style={{flex:1, alignItems:'center', }}>
                        <Text style={{color:'white', fontSize:19, }}>About Profile</Text>
                    </View>
                </View>

                <View style={{flex:9.75, }}>
                    <MyAppTab/>
                </View>
            </View>
        );
    }
}

const MyAppTab = TabNavigator({
    AboutPro: {screen: AboutPro,},
    APIcall: {screen: apiCallGenerate,},
    WebView: {screen:webViewData,},
    Lazyload: {screen:LazyloadScrollExample},
    Calc: {screen: calc},
});

const MyApp = DrawerNavigator({
    About: {screen: About,},
    FlatListView: {screen: flatListView,},
    PickerView: {screen:pickerView,},
    AlbumList: {screen:albumList},
    Authentication: {screen: firebaseLogin},
},
{
    initialRouteName: 'About',
    contentOptions: {
        activeTintColor: '#e91813',
    },
});

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

AppRegistry.registerComponent('navigationDemo', () => MyApp);
