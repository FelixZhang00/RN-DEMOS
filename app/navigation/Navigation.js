import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View
}from 'react-native'

import {
    StackNavigator,
} from 'react-navigation';

import HomeScreen from './HomeScreen'
import ChatScreen from './ChatScreen'


export const SampleNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    Chat:{screen:ChatScreen}
});

export default SampleNavigator;

