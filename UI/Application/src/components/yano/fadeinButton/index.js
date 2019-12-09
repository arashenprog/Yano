import React from 'react';
import { Animated, Dimensions, TouchableOpacity } from 'react-native';

const screenwidth = Dimensions.get('screen').width
const screenheight = Dimensions.get('screen').height

class FadeInButton extends React.Component {


    state = {
        fadeAnim: new Animated.Value(screenwidth / 4),
        fadeAnim2: new Animated.Value(screenwidth / 4),
        radius: new Animated.Value(screenwidth / 4)
    }

    componentDidMount() {
    }

    animatebutton = () => {
        Animated.timing(
            this.state.radius,
            {
                toValue: 10,
                duration: 1000,
            }
        ).start();
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: this.props.height,
                duration: 350,
            }
        ).start();
        Animated.timing(
            this.state.fadeAnim2,
            {
                toValue: screenwidth,
                duration: 350,
            }
        ).start();
        this.props.onPress
    }

    render() {
        let { fadeAnim, fadeAnim2, radius } = this.state;

        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    height: fadeAnim,
                    width: fadeAnim2,
                    borderRadius: radius,
                    justifyContent: "center",
                    alignItems: "center"
                    

                }}
            >
                <TouchableOpacity onPress={this.animatebutton}>

                    {this.props.children}
                </TouchableOpacity>

            </Animated.View>
        );
    }
}

export { FadeInButton }