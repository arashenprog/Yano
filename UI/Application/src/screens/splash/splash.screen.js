import React from 'react'
import { View, StatusBar, I18nManager, YellowBox } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import * as Animatable from 'react-native-animatable'
import Sound from 'react-native-sound'
import { Logo, LogoText } from '../../components'
import g from '../../../global'

export class SplashScreen extends React.PureComponent {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        Sound.setCategory('Ambient');
        this.state = {
            showLogoText: true,
        }
    }
    
    componentDidMount() {
        StatusBar.setHidden(true);
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
        YellowBox.ignoreWarnings(["Warning:"])
    }

    playSound() {
        var splash = new Sound('splash.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            else {
                splash.setVolume(1)
                splash.play((success) => {
                    if (success) {
                        console.log('successfully finished playing');
                    } else {
                        console.log('playback failed due to audio decoding errors');
                    }
                });
            }
        })
    }
    render() {
        setTimeout(() => {
            this.setState({ showLogoText: false })
        }, 2000)
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: g.colors.black }}>
                <Animatable.View
                    animation="fadeIn"
                    duration={6000}
                    style={{ justifyContent: "center", alignItems: "center" }}
                    onAnimationBegin={() => {
                        this.playSound()
                    }}
                    onAnimationEnd={() => {
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'Home' })],
                        }));
                    }}>
                    {
                        this.state.showLogoText ? (
                            <LogoText style={{ marginTop: 20 }} fill={g.colors.darkFore} width={100} height={100} />
                        ) :
                            <Logo fill={g.colors.darkFore} width={100} height={100} />
                    }
                </Animatable.View>
            </View>
        )
    }

}
export default SplashScreen
