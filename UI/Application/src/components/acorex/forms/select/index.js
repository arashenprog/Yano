import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import g from '../../../../../global'

const AXSelect = React.memo((props) => {
    return (
        <View  style={[styles.container]}>
            <View style={styles.input}>
                <Text style={{fontFamily:g.type.fontFamily,fontSize:g.type.textSize}}>{props.value}</Text>
            </View>
            <TouchableOpacity onPress={props.onPress} style={styles.button}>
                <Icon size={24} name={props.icon} />
            </TouchableOpacity>
        </View>
    )
})
AXSelect.defaultProps={
    icon :"chevron-down"
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row-reverse",
        justifyContent: 'center',
        alignItems:"center",
        borderWidth: 1,
        borderColor: "transparent",
        borderRadius: g.sizes.radius,
        marginBottom: g.sizes.xs,
        position: "relative",
        height: g.sizes.base,
        backgroundColor: g.colors.grayLight
    },
    input: {
        justifyContent:"center",
        alignItems:'flex-start',
        fontFamily: g.type.fontFamily,
        direction: g.type.direction,
        fontWeight: "normal",
        textAlign: g.type.textAlign,
        height: g.sizes.base,
        paddingStart: g.sizes.sm,
        paddingEnd: g.sizes.sm,
        flex: 1
    },
    button:{
        width:g.sizes.base -5,
        height:g.sizes.base - 5,
        backgroundColor:g.colors.primary,
        borderRadius:g.sizes.radius,
        justifyContent:"center",
        alignItems:"center",
        margin:2.5
    }
})
export { AXSelect }
