import React from 'react'
import { View } from 'react-native'
import g from '../../../../../global'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AXCircleIcon = React.memo((props) => {
    return (
        <View style={{ width: g.sizes.base, height: g.sizes.base, justifyContent: 'center', alignItems: "center", borderRadius: g.sizes.base, backgroundColor: g.colors[props.type] }}>
            <Icon color={g.colors[props.type + "Fore"] || g.colors.primaryFore} size={24} name={props.name}></Icon>
        </View>
    )
})
const AXIcon = React.memo((props) => {
    return (
        <Icon onPress={props.onPress} style={props.style} color={props.color} size={props.size || 24} name={props.name} {...props}></Icon>
    )
})

export { AXCircleIcon, AXIcon }