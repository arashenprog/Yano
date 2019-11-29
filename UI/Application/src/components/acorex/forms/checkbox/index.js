import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import g from "../../../../../global";

const AXCheckBox = props => {
  return (
    <TouchableOpacity
      onPress={!props.disabled ? props.onPress : null}
      activeOpacity={props.disabled ? 1 : 0.7}
      style={props.style}
    >
      {props.checked ? (
        <Icon
          name="checkbox-marked"
          size={30}
          color={props.disabled ? g.colors.grey : g.colors.primary}
        ></Icon>
      ) : (
        <Icon
          name="checkbox-blank-outline"
          size={30}
          color={props.disabled ? g.colors.grey : g.colors.primary}
        ></Icon>
      )}
    </TouchableOpacity>
  );
};

export { AXCheckBox };
