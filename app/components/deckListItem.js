import React from "react";
import { View, Text } from "react-native";

export default function DeckListItem(props) {
  const { title, questions } = props.deck;
  const { containerStyle, innerStyle, titleStyle, metaStyle } = props.styles;
  return (
    <View style={containerStyle}>
      <View style={innerStyle}>
        <Text style={titleStyle}>{title}</Text>
        <Text style={metaStyle}>{questions && questions.length} cards</Text>
      </View>
    </View>
  );
}
