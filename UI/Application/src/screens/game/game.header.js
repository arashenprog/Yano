import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { HeaderBar, Chips } from '../../components'
import g from '../../../global'

export default class GameHeader extends React.PureComponent {
  render() {
    return (
      <HeaderBar>
        <Chips
          onPress={()=>{
            this.onBack()
          }}
          text="بازگشت"
          leftIcon="arrow-left"
          type="primary"></Chips>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text
            style={[styles.logoText, { color: g.colors.primary }]}>
            نو
            </Text>
          <Text
            style={[
              styles.logoText,
              { color: g.colors.secondary },
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
  onBack = () => {
    debugger
    this.props.navigation.navigate("Home")
  }
}

const styles = StyleSheet.create({
  logoText: {
    fontSize: g.sizes.md,
    fontFamily: g.type.fontFamilyBlack,
  }
})
