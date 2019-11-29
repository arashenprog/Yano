import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
const AXContainer = React.memo((props) => {
    return (
        <SafeAreaView {...props}>
            {props.children}
        </SafeAreaView>
    )
})

const AXScroll = React.memo((props)=>{
    return(
        <ScrollView {...props}>
            {props.children}
        </ScrollView>
    )
})
export { AXContainer,AXScroll }
