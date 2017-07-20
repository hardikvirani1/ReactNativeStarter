import React, {Component} from 'react';
import { AppRegistry, ScrollView, Dimensions, Text, Button, View, Image, TouchableHighlight,
    StyleSheet } from 'react-native';
const { width, height } = Dimensions.get("window");

export default class AboutStack  extends Component{
    static navigationOptions = {
        header:null,
    };

    render () {
        return(
            <View style={{flex:1, flexDirection:'column'}}>
                <View style={{flex:3, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
                    <Image source={require('./images/trolltunga.jpg')} style={{width:width,
                        height:width/2}}/>
                </View>

                <View style={{flex:7, marginTop:-width/3.5}}>
                    <View style={{flex:2, flexDirection:'row', justifyContent: 'center', }}>

                        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={{fontSize: 18, color:'black', fontWeight: 'bold'}}>786</Text>
                            <Text style={{fontSize: 18, color:'black', fontWeight: 'bold'}}>Follower</Text>
                        </View>

                        <View style={{flex:1, justifyContent: 'space-around', alignSelf:'center'}}>
                            <Image source={require('./images/images.jpeg')} style={{width:width/3, height:width/3, }}/>
                        </View>

                        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 18, color:'black', fontWeight: 'bold'}}>786</Text>
                            <Text style={{fontSize: 18, color:'black', fontWeight: 'bold'}}>Following</Text>
                        </View>

                    </View>

                    <View style={{flex:5, flexDirection:'column', justifyContent:'space-around'}}>
                        <ScrollView>

                            <View style={{flex:1, backgroundColor:'#99B2CC', flexDirection:'row',
                                opacity:0.7, borderBottomWidth:1, borderBottomColor:'white', padding:2}}>
                                <View style={{ alignSelf:'center', justifyContent:'center', marginLeft:5 }}>
                                    <Image source={require('./images/facebook-placeholder-for-locate-places-on-maps.png')}
                                           style={{width:30, height:30}}/>
                                </View>
                                <View style={{ flex:1, justifyContent:'flex-start', marginLeft:15 }}>
                                    <Text style={{color:'white', fontSize:17}}>Segment Control</Text>
                                    <Text style={{color:'white', fontSize:17}}>Action sheet</Text>
                                </View>
                                <View style={{ alignSelf:'center', justifyContent:'flex-end' , marginRight:5}}>
                                    <TouchableHighlight onPress={() => {
                                        this.props.navigation.navigate('SegmentedControlIOS')}} style={{padding:12}}>
                                        <Image source={require('./images/arrow-point-to-right.png')} style={{width:20, height:20}}/>
                                    </TouchableHighlight>
                                </View>
                            </View>


                            <View style={{flex:1, backgroundColor:'#99B2CC', flexDirection:'row',
                                opacity:0.7, borderBottomWidth:1, borderBottomColor:'white', padding:2}}>
                                <View style={{ alignSelf:'center', justifyContent:'center', marginLeft:5 }}>
                                    <Image source={require('./images/if_Drive-Network-connected-icon_88548.png')}
                                           style={{width:30, height:30}}/>
                                </View>
                                <View style={{ flex:1, justifyContent:'flex-start', marginLeft:15 }}>
                                    <Text style={{color:'white', fontSize:17}}>Text</Text>
                                    <Text style={{color:'white', fontSize:17}}>Input</Text>
                                </View>
                                <View style={{ alignSelf:'center', justifyContent:'flex-end' , marginRight:5}}>
                                    <TouchableHighlight onPress={() => {
                                        this.props.navigation.navigate('TextInput')}} style={{padding:12}}>
                                        <Image source={require('./images/arrow-point-to-right.png')}
                                               style={{width:20, height:20}}/>
                                    </TouchableHighlight>
                                </View>
                            </View>


                            <View style={{flex:1, backgroundColor:'#99B2CC', flexDirection:'row',
                                opacity:0.7, borderBottomWidth:1, borderBottomColor:'white', padding:2}}>
                                <View style={{ alignSelf:'center', justifyContent:'center', marginLeft:5 }}>
                                    <Image source={require('./images/businessman.png')}
                                           style={{width:30, height:30}}/>
                                </View>
                                <View style={{ flex:1, justifyContent:'center', marginLeft:15 }}>
                                    <Text style={{color:'white', fontSize:17, alignItems:'center',}}>Login View</Text>
                                </View>
                                <View style={{ alignSelf:'center', justifyContent:'flex-end' , marginRight:5}}>
                                    <TouchableHighlight onPress={() => {
                                        this.props.navigation.navigate('LoginView')}} style={{padding:12}}>
                                        <Image source={require('./images/arrow-point-to-right.png')}
                                               style={{width:20, height:20}}/>
                                    </TouchableHighlight>
                                </View>
                            </View>


                            <View style={{flex:1, backgroundColor:'#99B2CC', flexDirection:'row',
                                opacity:0.7, borderBottomWidth:1, borderBottomColor:'white', padding:2}}>
                                <View style={{ alignSelf:'center', justifyContent:'center', marginLeft:5 }}>
                                    <Image source={require('./images/wifi-connection-signal-symbol.png')}
                                           style={{width:30, height:30}}/>
                                </View>
                                <View style={{ flex:1, justifyContent:'center', marginLeft:15 }}>
                                    <Text style={{color:'white', fontSize:17}}>Properties</Text>
                                </View>
                                <View style={{ alignSelf:'center', justifyContent:'flex-end' , marginRight:5}}>
                                    <TouchableHighlight onPress={() => {
                                        this.props.navigation.navigate('Property')}} style={{padding:12}}>
                                        <Image source={require('./images/arrow-point-to-right.png')}
                                               style={{width:20, height:20}}/>
                                    </TouchableHighlight>
                                </View>
                            </View>


                            <View style={{flex:1, backgroundColor:'#99B2CC', flexDirection:'row',
                                opacity:0.7,borderBottomWidth:1, borderBottomColor:'white', padding:2}}>
                                <View style={{ alignSelf:'center', justifyContent:'center', marginLeft:5 }}>
                                    <Image source={require('./images/speech-bubbles-comment-option.png')}
                                           style={{width:30, height:30}}/>
                                </View>
                                <View style={{ flex:1, justifyContent:'flex-start', marginLeft:15 }}>
                                    <Text style={{color:'white', fontSize:17}}>Activity</Text>
                                    <Text style={{color:'white', fontSize:17}}>Indecator</Text>
                                </View>
                                <View style={{ alignSelf:'center', justifyContent:'flex-end' , marginRight:5}}>
                                    <TouchableHighlight onPress={() => {
                                        this.props.navigation.navigate('activityIndecator')}} style={{padding:12}}>
                                        <Image source={require('./images/arrow-point-to-right.png')}
                                               style={{width:20, height:20}}/>
                                    </TouchableHighlight>
                                </View>
                            </View>


                            <View style={{flex:1, backgroundColor:'#99B2CC', flexDirection:'row',
                                opacity:0.7,borderBottomWidth:1, borderBottomColor:'white', padding:2}}>
                                <View style={{ alignSelf:'center', justifyContent:'center', marginLeft:5 }}>
                                    <Image source={require('./images/menu-three-horizontal-lines-symbol.png')}
                                           style={{width:30, height:30, tintColor:'white'}}/>
                                </View>
                                <View style={{ flex:1, justifyContent:'center', marginLeft:15 }}>
                                    <Text style={{color:'white', fontSize:17}}>Collectio View</Text>
                                </View>
                                <View style={{ alignSelf:'center', justifyContent:'flex-end' , marginRight:5}}>
                                    <TouchableHighlight onPress={() => {
                                        this.props.navigation.navigate('Collection')}} style={{padding:12}}>
                                        <Image source={require('./images/arrow-point-to-right.png')}
                                               style={{width:20, height:20}}/>
                                    </TouchableHighlight>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                </View>

            </View>
        )
    }
};