import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native'


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>
                    Hello, Chat app!
                </Text>
                <Button
                    onPress={()=>navigate('Chat')}
                    title={"char with xxx"}

                />
            </View>
        );
    }
}



export default HomeScreen;