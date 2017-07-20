import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, TouchableOpacity, StyleSheet,
    ScrollView, Image, Dimensions, Button, Alert,} from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';

const { width, height } = Dimensions.get("window");

const background = require("./images/login1_bg.png");
const mark = require("./images/login1_mark.png");
const lockIcon = require("./images/login1_lock.png");
const personIcon = require("./images/login1_person.png");
import ChatScreen from './ChatScreen';
import tabBarNavigator from './tabBarNavigator';

/*
//Stack Navigation Control in multiple js
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        debugger;
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Welcome, glad to see u here,</Text>
                <Button
                    onPress={() => navigate('Chat')}
                    title="Navigate_On_Screen"
                />
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
});



class RecentChatsScreen extends React.Component {
    render() {
        return(
        <Button
            onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
            title="Chat with Lucy"
        />
        )
        }
}

class AllContactsScreen extends React.Component {
    render() {
        return <Text>List of all contacts</Text>
    }
}

class AllEmpScreen extends React.Component {
    render() {
        return <Text>List of all Employees</Text>
    }
}

const MainScreenNavigator = TabNavigator({
    Recent: { screen: RecentChatsScreen },
    All: { screen: AllContactsScreen },
    Employee: {screen: AllEmpScreen},
});

const SimpleApps = StackNavigator({
    Home: { screen: MainScreenNavigator },
    Chat: { screen: ChatScreen },
});

MainScreenNavigator.navigationOptions = {
    title: 'My Chats App',
};*/

/*

//Stack Navigation Control in single js
class MyHomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        header:null
    };
    render() {
        return (
            <View>
                <View style={{backgroundColor:'lightgray', height:65}}>
                    <Text style={{color:'black', fontSize:19, alignSelf:'center'}}>Home</Text>
                </View>
                <View style={{flex:1}}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
                        title="Go to Lucy's profile"
                    />
                </View>
            </View>
        );
    }
}

class MyProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };
    render() {
        return (
            <Text>Go to Lucy's profile</Text>
        );
    }
}

const ModalStack = StackNavigator({
    Home:       { screen: MyHomeScreen },
    Profile:    { screen: MyProfileScreen },
});

*/

/*
//Tab Navigation Control
class MyHomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./chats-icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./notif-icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

const MyApp = TabNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
}, {
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
});
*/

/*

// Drawer Navigation
class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerPosition:'right',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./chats-icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View>
                <Button
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title="Open Drawer"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    title="Go to notifications"
                />
            </View>
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./notif-icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View>
                <Button
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title="Open Drawer"
                />
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const MyApp = DrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
});
*/


export default class LoginScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: null,
            password: null
        };
    }

    static navigationOptions = {
        title: 'Home',
        header:null
    };

    getUserName = (username) => {
        this.setState({ username: username });
    };

    getPassword = (password) => {
        this.setState({ password: password });
    };

    setLogin = (username, password) => {
        this.props.navigation.navigate('Profile', {username: this.state.username});
        //alert('username: ' + username + ' password: ' + password)
        /*if(username === null && password === null){
            this.props.navigation.navigate('Profile', {username: this.state.username});
        }
        else if(username === null || password === null)
        {
            Alert.alert(
                'Warning !',
                'username or password do not leave blank',
                [
                    {text: 'Cancel'},
                    {text: 'OK'},
                ]
            )
        }
        else
        {
            Alert.alert(
                'Error !',
                'Wrong Authentication',
                [
                    {text: 'Cancel'},
                    {text: 'OK'},
                ]
            )
        }*/
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={background} style={styles.background} resizeMode="cover">
                    <View style={styles.markWrap}>
                        <Image source={mark} style={styles.mark} resizeMode="contain" />
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
                            </View>
                            <TextInput
                                placeholder="Username"
                                autoFocus={true}
                                placeholderTextColor="#FFF"
                                style={styles.input}
                                value={this.state.username}
                                onChangeText={this.getUserName}
                            />
                        </View>
                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
                            </View>
                            <TextInput
                                placeholderTextColor="#FFF"
                                placeholder="Password"
                                style={styles.input}
                                secureTextEntry
                                onChangeText={this.getPassword}
                            />
                        </View>
                        <TouchableOpacity activeOpacity={.5}>
                            <View>
                                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.5}
                                          onPress = { () => this.setLogin(this.state.username, this.state.password)}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Log In</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.signupWrap}>
                            <Text style={styles.accountText}>Don't have an account?</Text>
                            <TouchableOpacity activeOpacity={.5}>
                                <View>
                                    <Text style={styles.signupLinkText}>Sign Up</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Image>
            </View>
        );
    }
}

const ModalStack = StackNavigator({
    Home:       { screen: LoginScreen },
    Profile:    { screen: ChatScreen },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    markWrap: {
        flex: 1,
        paddingVertical: 30,
    },
    mark: {
        width: null,
        height: null,
        flex: 1,
    },
    background: {
        width,
        height,
    },
    wrapper: {
        paddingVertical: 30,
    },
    inputWrap: {
        flexDirection: "row",
        marginVertical: 10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC"
    },
    iconWrap: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        height: 20,
        width: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        color:'#fff'
    },
    button: {
        backgroundColor: "#FF3366",
        paddingVertical: 15,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
    },
    forgotPasswordText: {
        color: "#D8D8D8",
        backgroundColor: "transparent",
        textAlign: "right",
        paddingRight: 15,
    },
    signupWrap: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    accountText: {
        color: "#D8D8D8"
    },
    signupLinkText: {
        color: "#FFF",
        marginLeft: 5,
    }
});

AppRegistry.registerComponent('navigationDemo', () => ModalStack);
