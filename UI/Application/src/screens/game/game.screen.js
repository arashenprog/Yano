import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import { CircleButton,HeaderBar,Chips } from '../../components'
import g from '../../../global'

let { width, height } = Dimensions.get("window");
let baseHeight = (height - 50) / 2;

export default class GameScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  }
  state = {
    showChart: false
  }
  componentDidMount() {
    console.log(baseHeight)
  }
  handlePressButton = () => {
    this.setState({ showChart: true })
  }
  render() {
    const data = [50, 10]
    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)
    const pieData = data
      .filter(value => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: randomColor(),
          onPress: () => console.log('press', index),
        },
        key: `pie-${index}`,
      }))
    return (
      <SafeAreaView style={styles.container}>
        <HeaderBar
        left={
          <Chips
            onPress={() => {
              this.onBack()
            }}
            text="بازگشت"
            leftIcon="arrow-left"
            type="primary"></Chips>
        }
        center={
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text
              style={[styles.logoText, { color: g.colors.primary }]}>
              نو
            </Text>
            <Text
              style={[
                styles.logoText,
                { color: g.colors.secondary },
              ]}>
              یا
            </Text>
          </View>
        }
        right={
          <Chips
            text="رتبه : 100"
            rightIcon="star-circle"
            type="secondary"></Chips>
        }>
      </HeaderBar>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>آیا شما از قد خود ناراضی هستید ؟</Text>
        </View>
 
          {!this.state.showChart
            ?
            (
              <View style={styles.controllContainer}>
                <CircleButton style={{ backgroundColor: g.colors.primary }} textStyle={{ color: g.colors.white }} text="نه" onPress={this.handlePressButton}></CircleButton>
                <CircleButton style={{ backgroundColor: g.colors.secondary }} textStyle={{ color: g.colors.white }} text="آره" onPress={this.handlePressButton}></CircleButton>
               </View>
            )
            :
            (
                 <View style={styles.chartContainer}>
                 <PieChart
                  style={{ width:width/2,height: 200 }}
                  data={pieData}
                />
                 </View>
               
            )
          }
       
      </SafeAreaView>
    );
  }
  onBack = () => {
    debugger
    this.props.navigation.navigate("Home")
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
    fontSize: 20,
    fontFamily: g.type.fontFamilyBlack,
    color: g.colors.greyDark,
    textAlign:"center"
  },
  controllContainer: {
    height: baseHeight,
    position: 'relative',
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: g.sizes.base
  },
  chartContainer: {
    height: baseHeight,
    position: 'relative',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  footerContainer: {
    position: "absolute",
    height: 50,
    width: width,
    bottom: 0
  },
  logoText: {
    fontSize: g.sizes.md,
    fontFamily: g.type.fontFamilyBlack,
  }
});