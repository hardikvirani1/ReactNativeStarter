import React, {Component} from 'react';
import {AppRegistry, Text, SegmentedControlIOS, View, StyleSheet, ActionSheetIOS,
    TouchableHighlight, Image, Alert, Animated, AppState, Switch, Button, Platform,  } from 'react-native';

import ActionSheet from 'react-native-actionsheet'
const options = [ 'Cancel', 'Apple', 'Banana', 'Watermelon', 'Durian' ];
const title = 'Select Item';

import { NavigationActions } from 'react-navigation';

let alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ';

let DESTRUCTIVE_INDEX = 4;
let CANCEL_INDEX = 0;

export default class segmentNprogress extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedIndex:0, clicked: 'none',  selected: '', switchValue: false
        };

        this.handlePress = this.handlePress.bind(this);
        this.showActionSheets = this.showActionSheets.bind(this);
    }

    static navigationOptions = {
        title: 'Segment',
        headerRight: (
            <Button
                title={`Back`}
                onPress={() =>{
                    const backAction = NavigationActions.back({
                    key: 'Profile'
                });
                    this.props.navigation.dispatch(backAction)
                }}
            />
        ),
    };

    toggleSwitch = (value) => this.setState({ switchValue: value });

    showActionSheets() {
        this.ActionSheet.show()
    }

    handlePress(i) {
        this.setState({
            selected: i
        })
    }

    render(){
        return (
            <View>
                <View style={{marginTop:5}}>
                    <SegmentedControlIOS style={{margin:15}}
                    values={['Home', 'ActionSheets', 'Alert']}
                    selectedIndex={this.state.selectedIndex}
                    onChange={(event) => {
                        this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                    }}
                    />
                </View>
                {
                    (this.state.selectedIndex == 0) &&
                        <View style={{flex:1}}>

                                <Text style={styles.textView}>Segment</Text>
                                <TouchableHighlight onPress={() => alert('Clicked')}>
                                    <Image
                                        style={{width:35, height:35, alignSelf:'center',}}
                                        source={require('./images/businessman.png')}
                                    />
                                </TouchableHighlight>

                        </View>

                    || (this.state.selectedIndex == 1) &&
                        <View style={styles.viewSelected}>
                            <Text style={styles.textView}>Action Sheets</Text>

                            <View>
                                <Text style={{marginBottom: 20, alignSelf:'center'}} >Selected  value : {options[this.state.selected]}</Text>
                                <Text style={{alignSelf:'center'}} onPress={this.showActionSheets}>Open ActionSheet</Text>
                                <ActionSheet
                                    ref={o => this.ActionSheet = o}
                                    title={title}
                                    options={options}
                                    cancelButtonIndex={CANCEL_INDEX}
                                    destructiveButtonIndex={DESTRUCTIVE_INDEX}
                                    onPress={this.handlePress}
                                />
                            </View>

                        </View>

                    || (this.state.selectedIndex == 2) &&
                        <View style={styles.viewSelected}>
                            <View style={{padding:5, margin:10}}>
                            <Text style={styles.textView}
                                  onPress={() => Alert.alert(
                                      'Alert Title',
                                      alertMessage,
                                      [
                                          {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                                          {text: 'OK', onPress: () => console.log('OK Pressed!')},
                                      ]
                                  )}
                            >Ok-Cancel</Text>

                            <Text style={styles.textView}
                                onPress={() => Alert.alert(
                                    'Alert Title',
                                    'My Alert Msg',
                                    [
                                        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                                    ],
                                    { cancelable: false }
                                )}>Multi-Buttons</Text>

                            <Text style={styles.textView}
                                  onPress={() => Alert.alert(
                                      'Alert Title',
                                      null,
                                      [
                                          {text: 'Foo', onPress: () => console.log('Foo Pressed!')},
                                          {text: 'Bar', onPress: () => console.log('Bar Pressed!')},
                                          {text: 'Baz', onPress: () => console.log('Baz Pressed!')},
                                      ]
                                  )}>Alert-Select</Text>
                        </View>
                            <View style={{padding:10}}>
                            </View>
                            <View style={{alignSelf:'center', }}>
                                <Switch value={this.state.switchValue} onValueChange={this.toggleSwitch} />
                                <Text>{this.state.switchValue ? 'ON' : 'OFF'}</Text>
                            </View>
                        </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    viewSelected: {

    },

    textView: {
        ...Platform.select({
            ios:{
                fontSize:16,
                padding:6,
                textAlign:'center',
                color:'black',
            },
            android:{
                fontSize:16,
                padding:6,
                textAlign:'center',
                color:'black',
                opacity:0.5,
            },
    }),
    },
});

AppRegistry.registerComponent('segmentNprogress', () => segmentNprogress);
