import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView, TextInput
} from 'react-native'

export default class Main extends Component<{}> {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state ={
            dataSource: ds.cloneWithRows(['first item','second item']),
        }
    }

    renderRow(row){
        return(
            <View style={styles.listItem}>
                <Text>{row}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height:40,borderColor:'gray',borderWidth:1}}
                    onChangeText={(text) => this.setState({text})}
                    placeholder="Enter search keyword"
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:25
    },
    listItem:{
        margin:10
    }
});