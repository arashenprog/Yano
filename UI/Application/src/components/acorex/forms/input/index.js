import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import g from "../../../../../global";

class AXInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      clear: false,
      value: ""
    };
    this.inputRef = React.createRef();
  }
  render() {
    let { component, onFocus, onBlur, showClear, onValueChange } = this.props;
    return (
      <View
        style={[
          styles.container,
          {
            borderColor: this.state.focused ? g.colors.primary : "transparent",
            backgroundColor: this.state.focused
              ? g.colors.white
              : g.colors.grayLight
          }
        ]}
      >
        <TextInput
          ref={this.inputRef}
          onFocus={() => {
            this.setState({ focused: true });
            onFocus;
          }}
          onBlur={() => {
            this.setState({ focused: false });
            if (this.state === "") {
              this.props.showClear = false;
            }
            onBlur;
          }}
          onChangeText={text => {
            this.handleChangeText(text);
          }}
          style={styles.textInput}
          placeholderTextColor={g.colors.grayDark}
          {...this.props}
        />
        {component ? component : null}
        {showClear ? (
          <React.Fragment>
            {this.state.clear ? (
              <TouchableOpacity
                onPress={this.onClearPress}
                style={{
                  position: "absolute",
                  start: 10,
                  top: g.sizes.base / 4
                }}
              >
                <Icon name="close" color={g.colors.black} size={24}></Icon>
              </TouchableOpacity>
            ) : null}
          </React.Fragment>
        ) : null}
      </View>
    );
  }
  handleChangeText(text) {
    this.setState({ value: text }, () => {
      if (this.state.value === "") {
        this.setState({ clear: false });
      } else {
        this.setState({ clear: true });
      }
    })
    if(this.props.onChange)
      this.props.onChange(text);

  }
  onClearPress = () => {
    this.inputRef.current.clear();
    this.setState({ clear: false });
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: g.sizes.radius,
    marginBottom: g.sizes.xs,
    flexDirection: "row",
    position: "relative",
    height: g.sizes.base
  },
  textInput: {
    fontFamily: g.type.fontFamily,
    direction: g.type.direction,
    fontWeight: "normal",
    textAlign: g.type.textAlign,
    height: g.sizes.base,
    paddingStart: g.sizes.sm,
    paddingEnd: g.sizes.sm,
    flex: 1
  }
});
export { AXInput };
