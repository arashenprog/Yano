import React from "react";
import { View, StyleSheet } from "react-native";
import { AXCheckBox } from "../checkbox";
import { AXText } from "../text";
import g from "../../../../../global";
const AXCheckItem = props => {
  return (

    <View style={[styles.container, { borderBottomWidth: !props.bordred ? 0 : 1 }]}>
      <AXCheckBox
        checked={props.checked}
        disabled={props.disabled}
        onPress={props.onPress}
        style={{ marginStart: 5 }}
      />
      <AXText text={props.text}></AXText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    paddingBottom: 5,
    alignItems: "center",
    flexDirection: "row-reverse",
    borderBottomColor: g.colors.grayLight
  }
});

export { AXCheckItem };
