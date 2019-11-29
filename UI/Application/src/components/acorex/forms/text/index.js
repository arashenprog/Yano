import React from "react";
import { Text } from "react-native";
import g from "../../../../../global";
const AXText = props => {
  return (
    <Text
      style={[
        {
          fontFamily: g.type.fontFamily,
          fontWeight: "normal",
          fontSize: props.size,
          color: g.colors[props.type],
          textAlign: props.textAlign ? props.textAlign : g.type.textAlign
        },
        { ...props.style }
      ]}
      {...props}
    >
      {props.text}
    </Text>
  );
};

export { AXText };
