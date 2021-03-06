import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView, TextInput, Image
} from 'react-native'
import {debounce} from 'lodash'

//import { OMDB_API_KEY} from '../../../api';
//https://stackoverflow.com/questions/33117227/setting-environment-variable-in-react-native
import {OMDB_API_KEY} from 'react-native-dotenv'
import ListItem from "./ListItem";

export default class Main extends Component<{}> {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
        }
        this.searchMovies = this.searchMovies.bind(this);

        console.log(OMDB_API_KEY)
    }

    searchMovies = debounce(text => {
        fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&plot=full&s=` + text)
            .then((response) => response.json())
            .then((responseData) => {
                if ('Search' in responseData) {
                    console.log(responseData);
                    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
                    this.setState({
                        dataSource: ds.cloneWithRows(responseData.Search)
                    })
                }

            })
            .catch((err) => {
                console.log(err)
            })
    }, 500);

    renderRow(row, sId, rId) {
        return (
            <ListItem row={row} delay={rId*50}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={this.searchMovies}
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
        marginTop: 25
    },
    listItem: {
        margin: 10
    },
    poster: {
        height: 75,
        width: 50
    },
    title: {
        margin: 5,
        fontSize: 15
    },
    subHeading: {
        margin: 5,
        fontSize: 12
    }
});