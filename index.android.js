import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button
} from 'react-native';
import TaskComponents from './src/components/TaskComponents';

class App extends Component {
    render() {
        return (
            <TaskComponents />
        );
    }
}

AppRegistry.registerComponent('app1', () => App);
