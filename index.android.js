/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'
import { Reducer } from './app/reducer/mainreducer';
import MainView from './app/view/Main';
import SecondView from './app/view/Second'
import { StackNavigator } from 'react-navigation';
import createLoggerMiddleware from 'redux-logger';

let middlewares = [
  thunk,  
];

if (__DEV__ === true) {
    middlewares.push(createLoggerMiddleware({}));
}

var store = createStore(Reducer, compose(applyMiddleware(...middlewares)));

const App = StackNavigator({
  Home: { screen: MainView},
  Second: { screen: SecondView}
});

export default class reactnativereduxlabb extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactnativereduxlabb', () => reactnativereduxlabb);
