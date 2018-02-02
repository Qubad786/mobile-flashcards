import React from "react";
import { TouchableOpacity, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../actions/index";
import {
  deckListItemStyles,
  deckListItemDetailStyles
} from "../styles/deckList";
import DeckListItem from "./deckListItem";

class DeckList extends React.Component {
  componentDidMount() {
    this.props.getDecks();
  }

  renderDeck = ({ item }) => {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TouchableOpacity onPress={() => navigate("DeckDetail", item)}>
          <DeckListItem deck={item} styles={deckListItemStyles} />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { decks } = this.props;
    return (
      <View>
        <FlatList
          data={Object.values(decks).sort((a, b) => a.title > b.title)}
          renderItem={this.renderDeck}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

function mapStateToProps(decks) {
  return { decks };
}

export default connect(mapStateToProps, { getDecks })(DeckList);
