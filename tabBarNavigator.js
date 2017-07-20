import React, {Component} from 'react';
import { AppRegistry, Text, Button, View, Image, TouchableHighlight, StyleSheet, DrawerLayoutAndroid } from 'react-native';
import { DrawerNavigator, TabNavigator } from 'react-navigation';

export default class tabBarNavigator extends Component {

    static navigationOptions = {
        header:null,
    };

    constructor(props){
        super(props);
    }

    componentWillMount(){}

    openDrawer=()=>{
        this.props.navigation.navigate('DrawerOpen');
    };

    render() {
        return (
            <View style={{flex:1,}}>

                <View style={{flex:.25, flexDirection:'row', paddingVertical:18, backgroundColor:'blue',opacity:0.4,
                    paddingHorizontal:13, borderBottomColor:'lightgray', borderBottomWidth:2}}>
                    <TouchableHighlight onPress={this.openDrawer}
                                        style={{ width:35, height:35}}>
                        <Image source={require('./images/menu-three-horizontal-lines-symbol.png')}
                               style={{width:25, height:20, tintColor:'white'}}/>
                    </TouchableHighlight>
                    <View style={{flex:1, alignItems:'center', }}>
                        <Text style={{color:'white', fontSize:19, }}>{this.props.navigation.state.params.username}'s Profile</Text>
                    </View>
                </View>

                <View style={{flex:9.75, backgroundColor:'blue', opacity:0.1}}>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>

                    </View>
                </View>

            </View>
        );
    }
}

class About extends Component{
    static navigationOptions = {
        tabLabel: 'Profiles',
        tabIcon: ({ tintColor }) => (
            <Image
                source={require('./images/login1_person.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    render() {
        return(
            <Text>About profile-view</Text>
        );
    }
}


const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

AppRegistry.registerComponent('navigationDemo', () => MyApp);
