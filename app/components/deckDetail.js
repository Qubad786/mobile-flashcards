import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { getDeck } from "../actions/index";
import deckDetailStyles from "../styles/deckDetail";
import DeckListItem from "./deckListItem";

function DeckDetail(props) {
  const { deck } = props;
  const { navigate } = props.navigation;
  return (
    <View style={deckDetailStyles.containerStyle}>
      <DeckListItem deck={deck} styles={deckDetailStyles} />

      <View style={deckDetailStyles.btnGroup}>
        <View style={deckDetailStyles.button}>
          <Button
            title="Add Card"
            color="#4267b2"
            onPress={() => navigate("NewQuestion", deck)}
          />
        </View>

        <View style={deckDetailStyles.button}>
          <Button
            title="Start Quiz"
            disabled={deck.questions.length === 0}
            color="#7c53c3"
            onPress={() => navigate("Quiz", deck)}
          />
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (decks, ownProps) => {
  const deck = ownProps.navigation.state.params;
  return {
    deck: decks[deck.title]
  };
};

export default connect(mapStateToProps)(DeckDetail);
