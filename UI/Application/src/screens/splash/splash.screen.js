import React from 'react'
import { View, StatusBar, I18nManager,YellowBox } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import * as Animatable from 'react-native-animatable'
import { Player } from '@react-native-community/audio-toolkit';
import { Logo, LogoText } from '../../components'
import g from '../../../global'

export class SplashScreen extends React.PureComponent {
    static navigationOptions = {
        header: null
    }
    state = {
        showLogoText: true,

    }
    componentDidMount() {
        StatusBar.setHidden(true)
        I18nManager.allowRTL(false)
        I18nManager.forceRTL(false)
        YellowBox.ignoreWarnings(["Warning:"])
    }
    render() { 
        setTimeout(() => {
            this.setState({ showLogoText: false })
        }, 1500)
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
                            <LogoText style={{ marginTop: 20 }} fill={g.colors.blackFore} width={150} height={150} />
                        ) :
                            <Logo fill={g.colors.blackFore} width={150} height={150} />
                    }
                </Animatable.View>
            </View>
        )
    }
    playSound() {
        let s = new Player("splash.mp3")
        s.play((err) => {
            console.log("Sound Error", err)
        })
    }
}
export default SplashScreen
