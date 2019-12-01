import React, { Component } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { AXScroll, AXInput, AXView, AXButton, AXImage, AXText, HeaderBar, Chips, AXContainer } from '../../../components';
let { width, height } = Dimensions.get('window');

import LogoText from '../../../assets/images/logotext.png';

export class RegisterScreen extends Component {
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
                        <AXText type="secondary" size={18} text="ثبت نام"></AXText>
                        <AXText textAlign="center" text="با یک بار ثبت نام میتوانید از تمامی بازی های گروه جعبه سیاه لذت ببرید"></AXText>

                    </AXView>
                    <AXView style={{ paddingStart: 50, paddingEnd: 50 }}>
                        <AXInput showClear={true} placeholder="شماره همراه (مثلا *******091)"></AXInput>
                        <AXInput showClear={true} placeholder="رمز عبور"></AXInput>
                        <AXInput showClear={true} placeholder="تکرار رمز عبور"></AXInput>
                        <AXView style={{ marginTop: 40 }}></AXView>

                        <AXButton onPress={this.doRegister} type="secondary" text="ثبت نام"></AXButton>
                        

                    </AXView>
                </AXScroll>
            </AXContainer>
        )
    }
    doRegister() { }
    onBack=()=>{
        this.props.navigation.navigate("Home")
    }
}
const styles = StyleSheet.create({

});
export default RegisterScreen
