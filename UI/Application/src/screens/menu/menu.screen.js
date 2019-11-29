import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Menu } from 'react-native-ui-kitten';
import { AXItem, AXText, AXScroll } from '../../components';
import g from '../../../global'
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
        <AXItem icon="account" iconSize={g.sizes.md} content={<AXText  text="ورود به حساب کاربری"></AXText>}></AXItem>
        <AXItem icon="account" content={<AXText text="ثبت نام"></AXText>}></AXItem>
        <AXItem icon="account" content={<AXText text="درباره یانو"></AXText>}></AXItem>
        <AXItem icon="account" content={<AXText text="تماس با سازنده"></AXText>}></AXItem>


      </AXScroll>

    );
  }
}
