import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View
}from 'react-native'


class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

export default ChatScreen;