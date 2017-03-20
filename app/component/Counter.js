import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import { ActionCreators } from '../reducer/counter';
import { connect } from 'react-redux';

class Counter extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Counter: {this.props.counter.count}
                </Text>

                <Button title="increment" onPress={this.props.increment} />
                <Button title="decrement" onPress={this.props.decrement} />
            </View>
        );
    }
}

export default connect(
    (state) => state,
    ActionCreators
)(Counter)