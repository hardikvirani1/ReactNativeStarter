import React, {Component} from 'react';
import {AppRegistry, View, ScrollView, Text, StyleSheet, Linking, Image, TouchableHighlight, Dimensions } from 'react-native';
import axios from 'axios';
const {height, width} = Dimensions.get('window');

export default class AlbumList extends Component{
    state = {albums: []};

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums:response.data}));
    }

    static navigationOptions = {
        drawerLabel: 'AlbumList',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../images/signup_person.png')}
                style={{tintColor: tintColor, height:24, width:24}}
            />
        ),
    };

    renderAlbum(){
        return this.state.albums.map(album =>

            <View key={album.title} style={{flex:1,flexDirection:'column', borderBottomWidth:1, borderBottomColor:'lightgray'}}>

                <View style={{flexDirection:'row', paddingVertical:5, paddingHorizontal:5 }}>
                    <View style={{ justifyContent:'center'}}>
                        <Image source={{uri: album.thumbnail_image}} style={{width:55, height:55,}}/>
                    </View>

                    <View style={{ justifyContent:'center', padding:6,  }}>
                        <Text style={{fontSize:16, }}>{album.title}</Text>
                        <Text style={{fontSize:13, }}>{album.artist}</Text>
                    </View>
                </View>

                <View style={{flexDirection:'column', justifyContent:'center', paddingHorizontal:5 }}>
                    <View style={{ justifyContent:'center'}}>
                        <Image source={{uri: album.image}} style={{width:width-10, height:width-10,}}/>
                    </View>

                    <View style={{ borderColor:'#007AFF', borderWidth:1, borderRadius:6, padding:6, margin:5  }}>
                        <TouchableHighlight onPress={() => Linking.openURL(album.url)} style={{}}>
                            <Text style={{fontSize:17, color:'#007AFF', alignSelf:'center' }}>Buy now!</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }

    render(){
        return(
          <View>
                  <View style={{ flexDirection:'row', paddingVertical:5, backgroundColor:'blue',opacity:0.4,
                      paddingHorizontal:10, }}>
                      <View style={{alignSelf:'center'}}>
                          <TouchableHighlight onPress={()=>{this.props.navigation.navigate('DrawerOpen');}}
                                          style={{ width:35, height:35, }}>
                          <Image source={require('../images/menu-three-horizontal-lines-symbol.png')}
                                 style={{width:25, height:20, tintColor:'white'}}/>
                      </TouchableHighlight>
                      </View>
                      <View style={{flex:1, alignItems:'center', }}>
                          <Text style={{color:'white', fontSize:19, }}>Albums</Text>
                      </View>
                  </View>
              <View>
              <ScrollView>
                  {this.renderAlbum()}
              </ScrollView></View>
          </View>
        );
    }
}