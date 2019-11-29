import React from 'react'
import { View, Text, S } from 'react-native'
import { AXPopup } from '../popup/index'
import g from '../../../../../global'
import { AXButton } from '../../forms/button'

const AXDialog = React.memo((props) => {
    return (
        <AXPopup show={props.show} position={props.position} height={props.height || 100} onOutPress={props.onOutPress} >
            <View style={{ padding: g.sizes.md }}>
                {props.title ? (<Text style={{ textAlign: g.type.textAlign, fontFamily: g.type.fontFamilyBold, color: g.colors.grayDark, fontSize: g.type.titleSize }}>
                    {props.title}
                </Text>) : null}
                {props.text ? (<Text style={{ textAlign: g.type.textAlign, fontFamily: g.type.fontFamily, color: g.colors.grayDark, fontSize: g.type.textSize }}>
                    {props.text}
                </Text>) : null}
            </View>
            {props.buttons ? (
                <View style={{ flexDirection: "row", padding: 20 }}>
                    {props.buttons.map((item => {
                        return (
                            <AXButton
                                key={item.id}
                                style={{ flex: 1, marginLeft: g.sizes.xs, marginRight: g.sizes.xs }}
                                type={item.type}
                                text={item.text}
                                onPress={() => {
                                    handleButtonPress(item)
                                }}
                            ></AXButton>
                        )
                    }))}
                </View>
            ) : null}
        </AXPopup >
    )
    function handleButtonPress(item) {
        props.onPressButton(item)
    }
})

export { AXDialog }
