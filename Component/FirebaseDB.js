import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, TouchableHighlight, ActivityIndicator, Image } from 'react-native';
import firebase from 'firebase';

export default class FirebaseDB extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: null,
            password: null,
            error: null,
            loading: false,
            loggedIn: null
        }
    }

    static navigationOptions = {
        drawerLabel: 'Authentication',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../images/signup_person.png')}
                style={{tintColor: tintColor, height:24, width:24}}
            />
        ),
    };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyASe0-syoeSSUbpB8RIltVNCZ6UDBgO0F8",
            authDomain: "authentication-7e1ad.firebaseapp.com",
            databaseURL: "https://authentication-7e1ad.firebaseio.com",
            projectId: "authentication-7e1ad",
            storageBucket: "authentication-7e1ad.appspot.com",
            messagingSenderId: "754594062048"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn: true});
            }
            else {
                this.setState({loggedIn: false});
            }
        });
    }

    btnLogin = () => {
        const {email, password} = this.state;
        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.LoginSuccess.bind(this))
            .catch(() =>{
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.LoginSuccess.bind(this))
                    .catch(this.LoginFailed.bind(this))
            });
    };

    LoginFailed(){
        this.setState({error: 'Authentication Failed...!', loading: false});
    }

    LoginSuccess(){
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        })
    }

    setLoading(){
        if(this.state.loading) {
            return <ActivityIndicator color="#007AFF" size="large"/>
        }
        else if(this.state.loggedIn === false)
        {
            return(
                <View style={{ backgroundColor:'#007AFF', borderColor:'white', borderWidth:1, borderRadius:6, padding:6, margin:5  }}>
                    <TouchableHighlight onPress={this.btnLogin} style={{}}>
                        <Text style={{fontSize:17, color:'white', alignSelf:'center' }}>Log in!</Text>
                    </TouchableHighlight>
                </View>
            );
        }
    }

    setRendering(){
        switch (this.state.loggedIn) {
            case true :
                return(
                    <View style={{ backgroundColor:'#007AFF',marginTop:10, borderColor:'white', borderWidth:1, borderRadius:6, padding:6, margin:5  }}>
                        <TouchableHighlight onPress={() => firebase.auth().signOut()}  style={{}}>
                            <Text style={{fontSize:17, color:'white', alignSelf:'center' }}>Log out!</Text>
                        </TouchableHighlight>
                    </View>
                );

            case false :
                return (
                    <View>
                        <View style={{flexDirection:'row', paddingVertical:10, paddingHorizontal:10  }}>
                            <View style={{flex:3, justifyContent:'center', alignSelf:'center'}}>
                                <Text style={{fontSize:18, }}>Email : </Text>
                            </View>

                            <View style={{flex:7, borderBottomWidth:1, borderBottomColor:'#007AFF', justifyContent:'center', alignSelf:'center'}}>
                                <TextInput style={{padding:5, width:200, height:30}} placeholder="user@gmail.com"
                                           autoCorrect={false} value={this.state.email} onChangeText={text => this.setState({email:text})}/>
                            </View>
                        </View>


                        <View style={{flexDirection:'row', paddingVertical:1, paddingHorizontal:10  }}>
                            <View style={{flex:3, justifyContent:'center', alignSelf:'center'}}>
                                <Text style={{fontSize:18, }}>Password : </Text>
                            </View>

                            <View style={{flex:7, borderBottomWidth:1, borderBottomColor:'#007AFF', justifyContent:'center', alignSelf:'center'}}>
                                <TextInput style={{padding:5, width:200, height:30}} placeholder="********" secureTextEntry={true}
                                           value={this.state.password} onChangeText={text => this.setState({password:text})}/>
                            </View>
                        </View>


                        <View style={{ justifyContent:'center', paddingHorizontal:5, }}>
                            <View style={{margin:1}}>
                                <Text style={{fontSize:15, color:'red', alignSelf:'center' }}>{this.state.error}</Text>
                            </View>
                        </View>
                    </View>
                );

            default :
                return <ActivityIndicator color="#007AFF" size="large"  style={{marginTop:15}}/>

        }
    }

    render(){
        return (
            <View style={{flexDirection:'column',}}>
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
                        <Text style={{color:'white', fontSize:19, }}>Authentication</Text>
                    </View>
                </View>
                {this.setRendering()}


                <View style={{flexDirection:'column', justifyContent:'center', paddingHorizontal:5 }}>
                    {this.setLoading()}
                </View>

            </View>
        );
    }
};
