import React from 'react'
import { View, Text, ActivityIndicator, Platform } from 'react-native'
import g from '../../../../../global'
import { AXPopup } from '../../popup';
import { AXText } from '../text'
const AXLoading = React.memo((props) => {
    return (
        <ActivityIndicator color={g.colors.primary || props.color} {...props} />
    )
})
const AXLodingDialog = React.memo((props) => {
    return (
        <AXPopup style={{ justifyContent: "center", alignItems: "center",flexDirection:"row" }} show={props.show} position="flex-end" height={150}>
            <ActivityIndicator size="large" color={g.colors.secondaryDark} />
            <Text style={{ marginTop:g.sizes.sm,color: g.colors.secondaryDark, fontFamily: g.type.fontFamilyBold, fontSize: g.type.titleSize }}>
                لطفا کمی صبر کنید
            </Text>
        </AXPopup>
    )
})
export { AXLoading, AXLodingDialog }
