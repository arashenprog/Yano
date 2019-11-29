import React from 'react'
import { View, Dimensions, StyleSheet, Modal, TouchableHighlight } from 'react-native'
import g from '../../../../../global'
let { width, height } = Dimensions.get("window");
const AXPopup = React.memo((props) => {
    return (
        <React.Fragment>
            <Modal
                animationType="fade"
                transparent={true}
                visible={props.show}
                onShow={props.onShow}
                onRequestClose={props.onClose}>
                <TouchableHighlight onPress={props.onOutPress} style={[styles.wrapper, { justifyContent: props.position }]}>
                    <TouchableHighlight style={[styles.box, { minHeight: props.height || height / 4 }, { ...props.style }]}>
                        <View>
                            {props.children}
                        </View>
                    </TouchableHighlight>
                </TouchableHighlight>
            </Modal>
        </React.Fragment>

    )
})
const styles = StyleSheet.create({
    wrapper: {
        width: width,
        height: height,
        backgroundColor: g.colors.darkOpacity,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
    },
    box: {
        backgroundColor: g.colors.white,
        width: width,
        borderRadius: g.sizes.radius,
        position: "absolute"
    }
})
export { AXPopup }
