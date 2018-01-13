import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native'

export default class Main extends Component<{}> {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state ={
            dataSource: ds.cloneWithRows(['first item','second item']),
        }
    }

    renderRow(){

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});