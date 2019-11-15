import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import g from '../../../global' 
const HeaderBar = (props) => {
    return (
        <View style={style.container}>
            
          <View style={{flex:1}}>
          {props.left}
          </View>
          <View style={{flex:2}}>
          {props.center}
          </View>
          <View style={{flex:1}}>
          {props.right}
          </View>

            
            
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
