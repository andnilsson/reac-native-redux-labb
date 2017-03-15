import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import React, { Component } from 'react';
import { ActionCreators } from '../reducer/counter';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


var styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold', 
  },
  activeTitle: {
    color: 'red',
  },
});

class MainView extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    test(){
        
    }

    render() {
        return (
            <View style={styles.container}>
                
                <Text style={styles.title}>Current count: {this.props.counter.count}</Text>
                <Button title="Tryck för nästa view" onPress={() => this.props.navigation.navigate('Second')} />
            </View>
        );
    }
}

export default connect(
    (state) => state,
    ActionCreators
)(MainView)