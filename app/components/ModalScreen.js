import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import NavButton from './NavButton';

class ModalScreen extends Component {

    static propTypes = {
        onButtonPress: PropTypes.func.isRequired
    };

    render() {
        let {onButtonPress} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>This is a Modal Screen</Text>

                <NavButton destLabel="Second" buttonHandler={onButtonPress}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cea76a',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: '#ffffff',
        marginBottom: 30
    }
});

export default ModalScreen;