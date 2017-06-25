import React, { Component } from 'react';
import {
    View
} from 'react-native';

import TaskItem from './TaskItem';
import TaskRequests from '../requests/TaskRequests';

const taskRequest = new TaskRequests();

export default class TaskComponents extends Component {
    constructor(props) {
        super(props);

        this.state = { tasks: [] };
    }

    componentWillMount() {
        taskRequest.list()
            .then((tasks) => {
                console.log(tasks);
                this.setState({ tasks: tasks.data });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <View>
                { this.state.tasks.map(task => (<TaskItem key={task.title} task={task} />)) }
            </View>
        )
    }
}
