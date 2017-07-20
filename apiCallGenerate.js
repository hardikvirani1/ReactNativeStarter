import React, {Component, PropTypes} from 'react';
import {AppRegistry, Text, View, TouchableOpacity, StyleSheet,ScrollView, Image, Dimensions, Platform} from 'react-native';
const window = Dimensions.get('window');

export  default class apiCallGenerate extends  Component {
    constructor(props){
        super(props);

        this.state ={resp: null};

        this.getMoviesFromApiAsync=this.getMoviesFromApiAsync.bind(this);
        this.alertItemName=this.alertItemName.bind(this);
    }

    static navigationOptions = {
        tabBarLabel: 'APIcall',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./images/login1_person.png')}
                style={{tintColor: tintColor, width:24, height:24}}
            />
        ),
    };

    componentDidMount () {
        this.getMoviesFromApiAsync();
    }

    alertItemName = (movie) => {
        alert(movie.title)
    };

    getMoviesFromApiAsync() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                //alert(JSON.stringify(responseJson.movies));
                this.setState({resp : responseJson.movies});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render(){
        return(
            <ScrollView>
                <View style={{}}>
                    <Text style={styles.heading}>Movie Lists</Text>
                    {
                        (this.state.resp != null) &&
                            this.state.resp.map((item) => (
                                <View key={item.title}
                                      style={styles.container}
                                      onPress={() => this.alertItemName(item)}>

                                    <View style={{alignSelf:'center'}}>
                                        <Image source={require('./images/login1_mark.png')} style={styles.imageSet}/>
                                    </View>

                                    <View style={{marginLeft: window.width*.02}}>
                                        <Text style={styles.text}>{item.title}</Text>
                                        <Text style={styles.text}>{item.releaseYear}</Text>
                                    </View>

                                    <View style={{alignSelf:'center',flex:1,alignItems:'flex-end'}}>
                                        <TouchableOpacity style={{borderRadius:6,borderWidth:1, borderColor:"#33adff"}}
                                            onPress={() => {alert(item.title)}}>
                                            <Text style={styles.setBtn}>Follow</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            ))
                        ||
                            null
                    }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create ({
    heading: {
        fontSize:18,
        textAlign:'center',
        backgroundColor:'black',
        padding:2,
        opacity:0.5,
        color:'white'
    },
    container: {
        flex:1,
        flexDirection:'row',
        padding: 5,
        marginTop: 5,
        backgroundColor: '#d9d9d9',
        //justifyContent: 'flex-start'
    },
    text: {
        color: 'black',
        fontSize:15,
        padding:2
    },
    imageSet: {
        marginLeft:10,
        width:window.width/8,
        height:window.width/8
    },
    setBtn: {
        backgroundColor:'red',
        color:'white',
        padding:5,
        ...Platform.select({
            ios: {
                backgroundColor:'#33adff'
            },
            android:{
                backgroundColor:'black'
            }
        })
    }
});

AppRegistry.registerComponent('apiCallGenerate', () => apiCallGenerate);
