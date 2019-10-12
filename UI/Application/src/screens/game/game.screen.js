import React, { Component } from 'react'
import { Text, View,StyleSheet,SafeAreaView,Dimensions } from 'react-native'
import GameHeader from './game.header'
import g from '../../../global'

let {width,height} = Dimensions.get("window");
let baseHeight = (height - 50) / 4;
export default class GameScreen extends Component {
    static navigationOptions={
        header:null
    }
    componentDidMount(){
      console.log(baseHeight)
    }
    render() {
        return (
          <SafeAreaView style={styles.container}>
            <GameHeader />
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>آیا شما از قد خود ناراضی هستید ؟</Text>
            </View>
            <View style={styles.controllContainer}>

            </View>
            <View style={styles.footerContainer}></View>

          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  questionContainer: {
    height: baseHeight,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: g.sizes.lg,
    fontFamily: g.type.fontFamilyBlack,
    color:g.colors.greyDark
  },
  controllContainer: {
    height: baseHeight * 3,
    position: 'relative',
  },
  footerContainer: {
    position:"absolute",
    height:50,
    width:width,
    bottom:0
  },
});