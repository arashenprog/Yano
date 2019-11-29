import React, { useState } from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import g from '../../../../../global'
const AXCollapse = (props) => {
    const [show, setShow] = useState(true)
    return (
        <TouchableOpacity key={props.key} activeOpacity={80} onPress={() => {
            setShow(!show)
        }} style={styles.container}>
            <React.Fragment>
                <View style={[styles.header, { borderRadius: !show ? g.sizes.radius : null }]}>
                    <Text style={{ fontFamily: g.type.fontFamily, fontSize: 16 }}>
                        {props.title}
                    </Text>
                    <View
                        style={styles.collapseButton}>
                        <Icon size={18} name={show ? "chevron-up" : "chevron-down"} />
                    </View>
                </View>
                <TouchableOpacity activeOpacity={100} style={{ padding: show ? 10 : 0 }}>
                    {show ? (
                        <View style={styles.contentWrapper} activeOpacity={100}>
                            {props.children}
                        </View>
                    ) : null}
                </TouchableOpacity>
            </React.Fragment>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: g.colors.white,
        borderRadius: g.sizes.radius,
        marginBottom: g.sizes.xs,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        borderWidth:1,
        borderColor:g.colors.grayLight,
        elevation: 3,
    },
    header: {
        height: g.sizes.base,
        backgroundColor: g.colors.primary,
        borderTopRightRadius: g.sizes.radius,
        borderTopLeftRadius: g.sizes.radius,
        justifyContent: "center",
        alignItems: "center"
    },
    collapseButton: {
        position: "absolute",
        start: g.sizes.sm
    },
    contentWrapper: {

    }
})
export { AXCollapse }
