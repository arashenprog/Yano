import React, { Component } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { AXScroll, AXInput, AXView, AXButton, AXImage, AXText, HeaderBar, Chips, AXContainer } from '../../../components';
let { width, height } = Dimensions.get('window');

import LogoText from '../../../assets/images/logotext.png';

export class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <AXContainer>
                <HeaderBar
                    left={<Chips
                        onPress={() => {
                            this.onBack()
                        }}
                        text="بازگشت"
                        leftIcon="arrow-left"
                        type="primary"></Chips>}
                />
                <AXScroll>

                    <AXView style={{ paddingStart: 50, paddingEnd: 50, alignItems: "center", marginBottom: 20 }}>
                        <AXImage
                            source={LogoText}
                            style={{ width: width / 3, height: width / 3, marginBottom: 5, marginTop: 20 }}
                            resizeMode="contain"
                        />
                        <AXText type="secondary" size={18} text="ورود به حساب کاربری"></AXText>
                        <AXText textAlign="center" text="اگر قبلا در یکی از بازی های گروه جعبه سیاه یا در یانو ثبت نام کرده اید لطفا اطلاعت خود را وارد کنید"></AXText>

                    </AXView>
                    <AXView style={{ paddingStart: 50, paddingEnd: 50 }}>
                        <AXInput showClear={true} placeholder="شماره همراه (مثلا *******091)"></AXInput>
                        <AXInput showClear={true} placeholder="رمز عبور"></AXInput>
                        <AXView style={{ marginTop: 40 }}></AXView>
                        <AXButton onPress={() => { this.doLogin() }} type="secondary" text="ورود"></AXButton>
                        <AXButton onPress={() => { this.props.navigation.navigate("Register") }} type="warning" text="قبلا ثبت نام نکرده ام"></AXButton>
                    </AXView>
                </AXScroll>
            </AXContainer>
        )
    }
    doLogin() { }
    onBack = () => {
        this.props.navigation.navigate("Home")
    }
}
const styles = StyleSheet.create({

});
export default LoginScreen
