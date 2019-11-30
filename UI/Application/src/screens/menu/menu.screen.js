import React, { Component } from 'react'
import {Dimensions} from 'react-native'
import { AXItem, AXText, AXScroll, AXView,Avatar } from '../../components';
import g from '../../../global'
let {width,height} = Dimensions.get("window");
export default class MenuScreen extends Component {
  static navigationOptions = {
    header: null
}
  state = {
    selectedIndex: null,
  };

  render() {
    return (
      <AXScroll>
        <AXView style={{justifyContent:"center",alignItems:"center", marginTop: 20, marginBottom: 20}}>
          <Avatar fill={ g.colors.secondary} logoFill="#fff" width={120} height={120} />
          <AXText
          text=" خوش اومدی"
            style={{
              fontSize: 16,
              marginTop: 20,
              fontFamily: g.type.fontFamily,
              color:g.colors.secondary
            }}>
           
          </AXText>
          
          <AXText type="secondary" text=" شما به صورت مهمان وارد شده اید" style={{fontSize: 18, fontFamily: g.type.fontFamily, color:g.colors.secondary}}></AXText>
          

        </AXView>
        <AXView style={{paddingStart:20,paddingEnd:20}}>
        <AXItem onPress={()=>{this.props.navigation.navigate("Login")}} type="gray" icon="account" content={<AXText  text="ورود به حساب کاربری"></AXText>}></AXItem>
        <AXItem onPress={()=>{this.props.navigation.navigate("Register")}} type="gray" icon="account" content={<AXText text="ثبت نام"></AXText>}></AXItem>

        <AXItem onPress={()=>{this.props.navigation.navigate("Profile")}} type="gray" icon="account" content={<AXText text="ویرایش پروفایل"></AXText>}></AXItem>
        <AXItem onPress={()=>{this.props.navigation.navigate("About")}} type="gray" icon="account" content={<AXText text="درباره یانو"></AXText>}></AXItem>
        <AXItem onPress={()=>{this.props.navigation.navigate("Contact")}} type="gray" icon="account" content={<AXText text="تماس با سازنده"></AXText>}></AXItem>
        </AXView>


      </AXScroll>

    );
  }
}
