import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';


export default class InputButton extends Component {

    render() {
        return (
            <TouchableHighlight style={[Styles.inputButton, this.props.highlight ? Styles.inputButtonHighlighted : null]}
                                underlayColor="#193441"
                                onPress={this.props.onPress}>
                <Text style={Styles.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>

        )
    }

}

const Styles = StyleSheet.create({
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#91AA9D'
    },
    inputButtonHighlighted: {
        backgroundColor: '#193441'
    },
    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
}
});

