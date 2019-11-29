import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import g from "../../../../../global";

const AXButton = props => {
  let { type, text, onPress } = props;
  return (
    <View style={[styles.container, { ...props.style }]}>
      <TouchableOpacity
        activeOpacity={props.disabled ? 1 : 0.6}
        underlayColor={g.colors[type + "Light"]}
        style={[
          styles.button,
          { height: props.small ? g.sizes.base / 2 : g.sizes.base },
          {
            backgroundColor: props.disabled ? g.colors.gray : g.colors[type]
          }
        ]}
        onPress={props.disabled ? null : onPress}
      >
        <Text
          style={{
            color: g.colors[type + "Fore"],
            fontFamily: g.type.fontFamilyBold,
            fontWeight: "normal"
          }}
        >
          {" "}
          {text}{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
AXButton.defaultProps = {
  type: "primary"
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginBottom: 10
  },
  button: {
    backgroundColor: g.colors.black,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: g.sizes.radius,
    height: g.sizes.base,
    alignItems: "center"
  }
});
export { AXButton };
