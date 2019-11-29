import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import g from "../../../../../global";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const AXItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={100}
      style={[styles.container, { ...props.style }]}
    >
      <View
        style={[styles.circleIcon, { backgroundColor: g.colors[props.type] }]}
      >
        <Icon
          size={g.sizes.sm}
          color={g.colors[props.type + "Fore"]}
          name={props.icon}
        />
      </View>
      {props.content}
    </TouchableOpacity>
  );
};
AXItem.defaultProps = {
  type: "primary"
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: g.sizes.base,
    alignItems: "center",
    marginBottom: g.sizes.xs,
    borderBottomWidth: 1,
    borderBottomColor: g.colors.grayLight,
    flexDirection: "row-reverse",
    justifyContent: "flex-start"
  },
  circleIcon: {
    width: g.sizes.md,
    height: g.sizes.md,
    backgroundColor: g.colors.grayLight,
    borderRadius: g.sizes.radius,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: g.sizes.xs
  }
});

export { AXItem };
