import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View
}from 'react-native'


import { StackNavigator } from 'react-navigation';

import Main from './components/main'


export const Movies = StackNavigator({
    Main: { screen: Main }
});


const styles = StyleSheet.create({

});

export default Movies;