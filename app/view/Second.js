import Counter from '../component/Counter';
import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native'

export default class SecondView extends React.Component {
    static navigationOptions = {
        title: 'Second screen',
    };
    render() {
        return (
            <View>
                <Counter />
                
                <Text>xfdgdsg</Text>
            </View>
        );
    }
}