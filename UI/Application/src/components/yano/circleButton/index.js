import React from 'react'
import { StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native'
import g from '../../../../global'


const { width } = Dimensions.get("window");

const CircleButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.container, { ...props.style }]}>
            <Text style={[styles.text, { ...props.textStyle }]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 4,
        height: width / 4,
        backgroundColor: "#ccc",
        borderRadius: width / 4,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 40,
        fontFamily: g.type.fontFamilyBold,

    }
})

export { CircleButton }
