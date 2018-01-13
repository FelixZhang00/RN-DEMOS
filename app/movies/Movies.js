import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View
}from 'react-native'

import {
    NavigationExperimental
} from 'react-native-deprecated-custom-components'

// import { StackNavigator } from 'react-navigation';

import Main from './components/main'

export default class Movies extends Component<{}>{

    renderScene(route,navigator){
        if(route.id === 'MAIN'){
            return <Main />;
        }
    }

    render(){
        return (
            <NavigationExperimental.Navigator style={{flex:1}}
                initialRoute={{id:'MAIN',title:'Search Movies'}}
                renderScene={this.renderScene}
            />
        );
    }
}

const styles = StyleSheet.create({

});