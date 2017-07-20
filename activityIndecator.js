import React, { Component } from 'react';
import { ActivityIndicator, Button,View, Text, TouchableOpacity, StyleSheet, AppRegistry} from 'react-native';

export default class activityIndecator extends Component {

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title:'Activity Indicator',
        headerRight: (
            <Button
                title={`Save`}
                onPress={() => alert('Right')}
            />
        ),
    };
    state = {animating :true};

    componentDidMount = () => this.closeActivityIndicator();

    closeActivityIndicator = () => setTimeout(() => this.setState({animating: false}), 10000);

    render(){
        const animating= this.state.animating;
        return(
            <View style={styles.container} >
                <ActivityIndicator
                animating={animating}
                color="#bc2b78"
                size="large"
                style={styles.activityIndicators} />
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },

    activityIndicators: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});

AppRegistry.registerComponent('activityIndecator', () => activityIndecator);