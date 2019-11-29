import React, { Component } from 'react'
import { Dimensions,StyleSheet } from 'react-native'
import { AXScroll, AXInput, AXView, AXButton, AXImage, AXText } from '../../../components';
let {width, height} = Dimensions.get('window');

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
            <AXScroll>
                
                <AXView style={{ paddingStart: 50,paddingEnd:50,alignItems:"center",marginBottom:20 }}>
                    <AXImage
                        source={LogoText}
                        style={{ width: width / 2, height: width / 2,marginBottom:5,marginTop:20 }}
                        resizeMode="contain"
                    />
                    <AXText type="secondary" size={18} text="ثبت نام در یانو"></AXText>
                    <AXText textAlign="center" text="با یک بار ثبت نام میتوانید از تمامی بازی های گروه جعبه سیاه لذت ببرید"></AXText>

                </AXView>
                <AXView style={{paddingStart: 50,paddingEnd:50}}>
                  
                    <AXInput placeholder="نام کاربری (به حروف انگلیسی)"></AXInput>
                    <AXInput placeholder="رمز عبور"></AXInput>
                    <AXInput placeholder="شماره همراه"></AXInput>
                    <AXButton type="secondary" text="ثبت نام"></AXButton>
                    <AXButton  text="بازگشت"></AXButton>

                </AXView>
            </AXScroll>
        )
    }
}
const styles = StyleSheet.create({

});
export default RegisterScreen
