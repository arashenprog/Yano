import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import { AXView, HeaderBar, Chips, FadeInButton, AXText } from '../../components'
import g from '../../../global'

let { width, height } = Dimensions.get("window");
let baseHeight = (height - 50) / 3;

export default class GameScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  }
  state = {
    showChart: false,
    yes:true,
    no:true
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

        <AXView style={{ flexDirection: "row" }} >
          {this.state.yes && (<FadeInButton onPress={()=>{this.setState({no:false})}} height={baseHeight * 2} style={{ backgroundColor: g.colors.secondary, height: 100 }}>
            <AXText text="آره"></AXText>
          </FadeInButton>)}
          {this.state.no && (<FadeInButton onPress={()=>{this.setState({yes:false})}} height={baseHeight * 2} style={{ backgroundColor: g.colors.primary, height: 100 }}>
            <AXText text="نه"></AXText>
          </FadeInButton>)}

          
        </AXView>

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
    textAlign: "center"
  },
  controllContainer: {
    height: baseHeight,
    position: 'relative',
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: g.sizes.base,
  },
  chartContainer: {
    height: baseHeight,
    position: 'relative',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },

  logoText: {
    fontSize: g.sizes.md,
    fontFamily: g.type.fontFamilyBlack,
  }
});