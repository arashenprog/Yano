import React, { Component } from 'react'
import { View } from 'react-native'
import { Input } from 'react-native-ui-kitten';
import LoginHeader from './login.header';
export default class LoginScreen extends React.PureComponent {
    static navigationOptions = {
        header: null,
    };
    state = {
        value: '',
    };

    onChangeText = (value) => {
        this.setState({ value });
    };

  
    render() {
        return (
            <View>
                <LoginHeader />
                <Input
                    placeholder='Place your Text'
                    caption={'Invalid value'}
                    value={this.state.value}
                    onChangeText={this.onChangeText}
                />
            </View>
        )
    }
}
