import React, {Component, PropTypes} from 'react';
import {AppRegistry, Text, View, TouchableHighlight, StyleSheet, FlatList, Button, Image, Dimensions, ScrollView} from 'react-native';
import img from './images/login1_mark.png';
const window = Dimensions.get('window');
const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class flatListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
            loaded: false,
        };
    }

    static navigationOptions = {
        drawerLabel: 'FlatListView',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./images/signup_person.png')}
                style={{tintColor: tintColor, height:24, width:24}}
            />
        ),
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({dataSource : responseData.movies, loaded: true,});
            })
            .done();
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    }

    keyExtractor = (item, index) => item.id;

    setBtnClick() {
        alert('Selected Index: ');
    }

    renderMovie(movie) {
        return (

            <View style={styles.container}>

                <Image source={img} resizeMode='contain' style={{height: 55, width: 55, margin:10}}/>
                {/*uri: movie.item.posters.detailed*/}
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.item.title}</Text>
                    <Text style={styles.year}>{movie.item.year}</Text>
                </View>

                <TouchableHighlight  style={styles.btnCss}
                                     onPress={(item, index) => {
                                         alert(movie.item.title + ' ' + index);
                                     }}
                >
                    <Text style={{alignSelf:'center', color:'white',}}>Show</Text>
                </TouchableHighlight>

            </View>
        );
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
                <View style={{flex:1,}}>
                    <View style={{flex:.25, flexDirection:'row', paddingVertical:18, backgroundColor:'blue',opacity:0.4,
                        paddingHorizontal:13, }}>
                        <TouchableHighlight onPress={()=>{this.props.navigation.navigate('DrawerOpen');}}
                                            style={{ width:35, height:35}}>
                            <Image source={require('./images/menu-three-horizontal-lines-symbol.png')}
                                   style={{width:25, height:20, tintColor:'white'}}/>
                        </TouchableHighlight>
                        <View style={{flex:1, alignItems:'center', }}>
                            <Text style={{color:'white', fontSize:19, }}>FlatListView</Text>
                        </View>
                    </View>

                    <View style={{flex:9.75}}>
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={this.renderMovie}
                            style={styles.listView}
                            keyExtractor={this.keyExtractor}
                            extraData={this.state.dataSource}
                        />
                    </View>
                </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderBottomWidth:1,
        borderBottomColor:'lightgray'
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 17,
        marginBottom: 8,
        textAlign: 'left',
    },
    year: {
        textAlign: 'left',
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    btnCss: {
        width:65,
        padding:5,
        backgroundColor: 'green',
        borderWidth:1,
        borderRadius:6,
        borderColor:'green',
        marginRight:15
    }
});

AppRegistry.registerComponent('SampleAppMovies', () => flatListView);

