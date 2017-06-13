import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button
} from 'react-native';

const generateRandomNumber = () => {
    let number = Math.floor(Math.random() * 10);
    alert(number);
};

const App = () => {
    return (
        <View>
            <Text>Generate random numbe!r</Text>
            <Button
                title="Generator"
                onPress={generateRandomNumber}
            />
        </View>
    );
};

AppRegistry.registerComponent('app1', () => App);
