import React, {Component, PropTypes} from 'react';
import {NavigationExperimental, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import First from './First';
import Second from './Second';
import Third from './Third';
import Modal from './Modal';

import {navigatePop} from '../actions';

const {
    CardStack:NavigationCardStack,
    Card:NavigationCard,
    Header:NavigationHeader
} = NavigationExperimental;


class AppContainerWithCardStack extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        navigationState: PropTypes.object,
        backAction: PropTypes.func.isRequired
    }

    _renderScene = ({scene}) => {
        const {route} = scene;

        switch (route.key) {
            case 'First':
                return <First/>;
            case 'Second':
                return <Second/>;
            case 'Third':
                return <Third/>;
            case 'Modal':
                return <Modal/>;
        }
    }

    render() {
        let {navigationState, backAction} = this.props;

        return (
            <NavigationCardStack navigationState={navigationState}
                                 onNavigateBack={backAction}
                                 style={styles.container}
                                 direction=
                                     {navigationState.routes[navigationState.index].key === 'Modal'?'vertical':'horizontal'}
                                 renderHeader={props=>(
                                     <NavigationHeader
                                        {...props}
                                        onNavigateBack={backAction}
                                        renderTitleComponent={props=>{
                                            const title = props.scene.route.title;
                                            return <NavigationHeader.Title>{title}</NavigationHeader.Title>
                                        }}
                                     />
                                 )}
                                 renderScene={this._renderScene}
            />
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default connect(
    state => ({
        navigationState: state.navigationState
    }),
    dispatch => ({
        backAction: () => {
            dispatch(navigatePop())
        }
    })
)(AppContainerWithCardStack);