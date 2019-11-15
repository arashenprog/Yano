import React from 'react'
import { View, Text } from 'react-native'
import { HeaderBar, Chips } from '../../../components'

import g from '../../../../global';

const LoginHeader = (props) => {
    return (
        <View>
            <HeaderBar
                left={<Chips
                    onPress={()=>{
                        props.navigation.navigate("Home")
                    }}
                    text="بازگشت"
                    leftIcon="arrow-left"
                    type="primary"></Chips>
                }
                center={
                    <Text
                        style={{
                            fontSize: g.sizes.lg,
                            fontFamily: g.type.fontFamilyBlack,
                            textAlign: "center", color: g.colors.secondary
                        }}>
                        ثبت نام
                        </Text>
                }
                right={<View></View>}
            ></HeaderBar>
        </View>
    )
}

export default LoginHeader
