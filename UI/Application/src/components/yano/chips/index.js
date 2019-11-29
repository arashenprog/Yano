import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import g from '../../../../global'
const Chips = (props) => {
    return (
      <TouchableOpacity onPress={props.onPress} activeOpacity={0} style={[style.container, {backgroundColor: g.colors[props.type]}]}>
        {props.leftIcon && (
          <Icon
            name={props.leftIcon}
            color={g.colors[props.type + 'Fore']}
            size={g.sizes.base / 3}
            style={{marginEnd: 10}}></Icon>
        )}
        <Text
          style={{
            color: g.colors[props.type + 'Fore'],
            fontFamily: g.type.fontFamily,
          }}>
          {props.text}
        </Text>
        {props.rightIcon && (
          <Icon
            name={props.rightIcon}
            color={g.colors[props.type + 'Fore']}
            size={g.sizes.base / 3}
            style={{marginStart: 10}}></Icon>
        )}
      </TouchableOpacity>
    );
}
const style = StyleSheet.create({
  container: {
    height: g.sizes.base / 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems:"center",

    marginEnd: 5,
    marginRight: 5,
    paddingEnd: 10,
    paddingStart: 10,
    borderRadius: 50 / 2,
  },
});
export { Chips}
