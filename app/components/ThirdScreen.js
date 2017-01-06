import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import NavButton from './NavButton';

class ThirdScreen extends Component {

    static propTypes = {
        onButtonPress: PropTypes.func.isRequired
    };

    render() {
        let {onButtonPress} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Third Screen</Text>

                <NavButton destLabel="Home" buttonHandler={onButtonPress}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#79BD8F',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 26,
        fontWeight: '500',
        color: '#ffffff',
        marginBottom: 30
    }
});

export default ThirdScreen;