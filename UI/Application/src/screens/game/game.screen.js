import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import { CircleButton } from '../../components'

import GameHeader from './game.header'
import g from '../../../global'
let { width, height } = Dimensions.get("window");
let baseHeight = (height - 50) / 2;
export default class GameScreen extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    showChart: false
  }
  componentDidMount() {
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
          {!this.state.showChart
            ?
            (
              <React.Fragment>
                 <CircleButton style={{ backgroundColor: g.colors.primary }} textStyle={{ color: g.colors.white }} text="نه" onPress={() => {
                  alert("نه")
                }}></CircleButton>
                <CircleButton style={{ backgroundColor: g.colors.secondary }} textStyle={{ color: g.colors.white }} text="آره" onPress={() => {
                  alert("آره")
                }}></CircleButton>
              </React.Fragment>
            )
            :
            (
              <React.Fragment>
               

              </React.Fragment>
            )
          }
        </View>
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
    alignItems: 'center'
  },
  questionText: {
    fontSize: g.sizes.lg,
    fontFamily: g.type.fontFamilyBlack,
    color: g.colors.greyDark
  },
  controllContainer: {
    height: baseHeight,
    position: 'relative',
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: g.sizes.base
  },
  footerContainer: {
    position: "absolute",
    height: 50,
    width: width,
    bottom: 0
  },
});