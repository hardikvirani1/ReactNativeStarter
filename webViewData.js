import React, {Component} from 'react';
import {AppRegistry, Text, WebView, Image} from 'react-native';

export default class webViewData extends Component {
    static navigationOptions = {
        tabBarLabel: 'Webview',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./images/login1_person.png')}
                style={{tintColor: tintColor, width:24, height:24}}
            />
        ),
    };
    render() {
        return (
            <WebView source={{uri: 'https://github.com/facebook/react-native'}}
                     style={{marginTop:25}}>
            </WebView>
        );
    }
}

AppRegistry.registerComponent('webViewData', () => webViewData)