import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function Button(props) {
  const { buttonStyle, textStyle, text, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}
