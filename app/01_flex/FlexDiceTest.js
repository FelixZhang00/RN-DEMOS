import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View
}from 'react-native'

/**
 * 模拟骰子进行布局，算是Flex布局各类属性的实战
 */
export default class FlexTest extends Component<{}> {
    render(){
        return (
            <View style={FlexDiceTestStyle.container}>
                <Text style={FlexDiceTestStyle.item1}>1</Text>
                <Text style={FlexDiceTestStyle.item1}>2</Text>
                <Text style={FlexDiceTestStyle.item1}>3</Text>
                <Text style={FlexDiceTestStyle.item1}>4</Text>
                <Text style={FlexDiceTestStyle.item1}>5</Text>
                <Text style={FlexDiceTestStyle.item1}>6</Text>
                <Text style={FlexDiceTestStyle.item1}>7</Text>
                <Text style={FlexDiceTestStyle.item1}>8</Text>
                <Text style={FlexDiceTestStyle.item1}>9</Text>
            </View>
        );
    }
}

const FlexDiceTestStyle = StyleSheet.create({
    container:{
        backgroundColor:"blue",
        height:300,
        width:300,
        flexWrap:"wrap",
        flexDirection:"row",
        justifyContent: "space-between",
    },
    item1:{
        color:"#fff",
        backgroundColor:"#000",
        height:80,
        width:80,
        textAlign:"center",
        textAlignVertical:"center",
        margin:4
    },

})
