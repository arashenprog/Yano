import React from 'react'
import { View, Dimensions } from 'react-native'
import PersianCalendarPicker from 'react-native-persian-calendar-picker';
import g from '../../../../../../global'
import { AXPopup } from '../../../popup';
import { AXSelect } from '../../select';
import { AXButton } from '../../button';
import moment from "moment-jalaali"
let { width, height } = Dimensions.get("screen");

export default class AXDatePicker extends React.PureComponent {
    state = {
        showModal: false,
        selectedDate:"تاریخ را وارد کنید"
    }
    render() {
        return (
            <View>

                <AXSelect
                    onPress={() => { this.setState({ showModal: true }) }}
                    icon="calendar" value={this.state.selectedDate} />
                <AXPopup show={this.state.showModal} onOutPress={() => { this.setState({ showModal: false }) }} height={height / 2} position="flex-end">
                    <View style={{ padding: 20,paddingTop:40 }}>
                        <PersianCalendarPicker
                            onDateChange={this.onDateChange}
                            style={{ paddingTop: 20 }}
                            textStyle={{ fontFamily: g.type.fontFamily }}
                            todayBackgroundColor={g.colors.success}
                            selectedDayColor={g.colors.primary}
                            {...this.props} />
                    </View>

                </AXPopup>
            </View>
        )
    }
    onDateChange = (date) => {
        let obj = {
            jalaali:moment(date).format("jYYYY/jMM/jDD"),
            gregorian:moment(date).format("YYYY/MM/DD"),
            raw:date
        }
        let _date = moment(date).format("jYYYY/jMM/jDD")
        this.setState({ selectedDate: _date, showModal: false })
        this.props.onChange(obj);
    }
}

export { AXDatePicker }
