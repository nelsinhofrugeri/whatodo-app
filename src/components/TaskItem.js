import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class TaskItem extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.task.title}</Text>
            </View>
        );
    }
}
