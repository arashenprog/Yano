import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import {HeaderBar,Chips} from '../../components'
import g from '../../../global'
import GameHeader from './game.header'
export default class GameScreen extends Component {
    static navigationOptions={
        header:null
    }
    
    render() {
        return (
          <View>
            <GameHeader />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    logoText:{
        fontSize: g.sizes.lg,
        fontFamily: g.type.fontFamily,
    }
})