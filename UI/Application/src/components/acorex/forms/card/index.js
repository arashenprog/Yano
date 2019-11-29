import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import g from "../../../../../global";
import Icon from "react-native-vector-icons";
const AXCard = props => {
  return (
    <TouchableOpacity
      activeOpacity={props.onPress ? 0.6 : 100}
      onPress={props.onPress}
      style={[styles.container, { ...props.style }]}
    >
      {props.header ? (
        <View
          style={[
            styles.header,
            {
              backgroundColor: props.type
                ? g.colors[props.type]
                : g.colors.grayLight
            }
          ]}
        >
          {props.header}
        </View>
      ) : null}
      <View style={styles.body}>{props.children}</View>
      {props.footer ? (
        <View style={styles.footer}>{props.footer}</View>
      ) : (
        <View style={{ padding: 10 }}></View>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: g.colors.white,
    borderRadius: g.sizes.radius,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  header: {
    height: g.sizes.base,
    backgroundColor: g.colors.grayLight,
    borderTopRightRadius: g.sizes.radius,
    borderTopLeftRadius: g.sizes.radius,
    justifyContent: "center"
  },
  body: {
    backgroundColor: g.colors.white
  },
  footer: {
    minHeight: g.sizes.base,
    justifyContent: "center",
    borderTopColor: g.colors.grayLight,
    borderBottomLeftRadius: g.sizes.radius,
    borderBottomRightRadius: g.sizes.radius
  }
});
export { AXCard };
