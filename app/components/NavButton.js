import React, {Component, PropTypes} from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

class NavButton extends Component {

    static propTypes = {
        destLabel: PropTypes.string.isRequired,
        buttonHandler: PropTypes.func.isRequired,
    };

    render() {
        let {destLabel, buttonHandler} = this.props;
        return (
            <TouchableOpacity style={styles.button} onPress={buttonHandler}>
                <Text style={styles.label}>Go to {destLabel} Page</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        backgroundColor: '#3C5773',
        alignSelf: 'stretch'
    },
    label: {
        color: '#F4F4E9',
        textAlign: 'center'
    }
});
export default NavButton;