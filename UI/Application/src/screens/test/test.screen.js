import React from 'react';
import { Animated, Text, View,Dimensions,Button } from 'react-native';

const screenwidth = Dimensions.get('screen').width
const screenheight = Dimensions.get('screen').height
class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(100),  
    fadeAnim2: new Animated.Value(100),
    animatedValue: new Animated.Value(0)

  }

  componentDidMount() {
  }

  animatebutton() {
      Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: screenheight-40,                
        duration: 350,              // Make it take a while
      }
    ).start();     
        Animated.timing(                  // Animate over time
      this.state.fadeAnim2,            // The animated value to drive
      {
        toValue: screenwidth,                  
        duration: 350,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim,fadeAnim2,animatedValue } = this.state;
    const animatedStyles = {
      transform: [
        {
          translateX: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -120],

            extrapolate: 'clamp',
          }) 
        },
        {
          translateY: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -50],
            extrapolate: 'clamp',
          })
        }
      ]
    }
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          height: fadeAnim, 
          width : fadeAnim2 ,
          transform: [
            {
              translateX: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -120],
    
                extrapolate: 'clamp',
              }) 
            },
            {
              translateY: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -50],
                extrapolate: 'clamp',
              })
            }
          ]  ,justifyContent:"center",alignItems:"center"
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class TestScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props){
    super(props);
    this.state={
    }
  }
  animatebutton(){
    this.fade.animatebutton();
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
        <Text>asdasd</Text>
        <FadeInView style={{backgroundColor: 'powderblue'}} ref={ani => this.fade = ani}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>OK</Text>
        </FadeInView>
        <Button title="go animate" onPress={() => this.animatebutton()}/>
      </View>
    )
  }
}