import React, {Component} from 'react';
import {AppRegistry, Picker, Text, View, Image, TouchableHighlight } from 'react-native';
import DatePicker from 'react-native-datepicker'
//import { Picker } from 'react-native-picker-dropdown'

export default class pickerData extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date(), language: null}
    }

    static navigationOptions = {
        header:null,
        drawerLabel: 'PickerView',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./images/login1_person.png')}
                style={{tintColor: tintColor, width:24, height:24}}
            />
        ),
    };

    render() {
        return (
        <View style={{flex:1,}}>
            <View style={{flex:.25, flexDirection:'row', paddingVertical:18, backgroundColor:'blue',opacity:0.4,
                paddingHorizontal:13,}}>
                <TouchableHighlight onPress={()=>{this.props.navigation.navigate('DrawerOpen');}}
                                    style={{ width:35, height:35}}>
                    <Image source={require('./images/menu-three-horizontal-lines-symbol.png')}
                           style={{width:25, height:20, tintColor:'white'}}/>
                </TouchableHighlight>
                <View style={{flex:1, alignItems:'center', }}>
                    <Text style={{color:'white', fontSize:19, }}>PickerView</Text>
                </View>
            </View>

            <View style={{flex:9.75, alignSelf:'center'}}>
                <View>
                    <DatePicker style={{width: 200}} date={this.state.date} mode="date" placeholder="Select date"
                        format="DD-MM-YYYY" minDate="2016-05-01" maxDate="9999-12-31" confirmBtnText="Confirm"
                        cancelBtnText="Cancel" customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => {this.setState({date: date})}} />
                </View>

                <View>
                    <Picker selectedValue={this.state.language}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                        <Picker.Item label="Ruby" value="ruby" />
                        <Picker.Item label="Python" value="python" />
                        <Picker.Item label="Elm" value="elm" />
                    </Picker>
                </View>

                <View>
                    <Text onpress={() => alert('not appli')}>Next</Text>
                </View>

                </View>
        </View>
        );
    }
}

AppRegistry.registerComponent('home', () => pickerData);
