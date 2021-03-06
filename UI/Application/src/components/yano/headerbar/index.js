import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import g from '../../../../global' 
const HeaderBar = (props) => {
    return (
        <View style={style.container}>
          <View>{props.left}</View>
          <View>{props.center}</View>
          <View>{props.right}</View>
        </View>
    )
}
const style = StyleSheet.create({
  container: {
    height: g.sizes.base,
    backgroundColor: g.colors.white,
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingEnd: 5,
    paddingStart: 5
  },
});
export { HeaderBar }
