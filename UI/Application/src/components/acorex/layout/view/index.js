import React from 'react'
import { View } from 'react-native'

const AXView = (props) => {
    return (
        <View {...props}>
            {props.children}
        </View>
    )
}

export { AXView }
