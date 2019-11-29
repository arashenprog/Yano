import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import {HeaderBar,Chips} from '../../components'
import g from '../../../global'

export default class GameHeader extends React.PureComponent {
                 render() {
                   return (
                     <HeaderBar>
                       <Chips
                         onPress={this.handleBackPress}
                         text="بازگشت"
                         leftIcon="arrow-left"
                         type="primary"></Chips>
                       <View style={{display: 'flex', flexDirection: 'row'}}>
                         <Text
                           style={[styles.logoText, {color: g.colors.primary}]}>
                           نو
                         </Text>
                         <Text
                           style={[
                             styles.logoText,
                             {color: g.colors.secondary},
                           ]}>
                           یا
                         </Text>
                       </View>
                       <Chips
                         text="رتبه : 100"
                         rightIcon="star-circle"
                         type="secondary"></Chips>
                          {/* <Chips
                         text="سکه : 2000"
                         rightIcon="coins"
                         type="warning"></Chips> */}
                     </HeaderBar>
                   );
                 }
                 handleBackPress = () => {
                   this.props.navigation.navigate('Home');
                   console.log("object")
                 };
               }
const styles = StyleSheet.create({
    logoText:{
        fontSize: g.sizes.lg,
        fontFamily: g.type.fontFamilyBlack,
    }
})
