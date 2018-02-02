import React from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { addDeck } from "../actions/index";
import { styles } from "../styles/newDeck";

class NewDeck extends React.Component {
  state = {
    title: ""
  };

  newDeckHandler = () => {
    const { title } = this.state;
    const { decks, addDeck, navigation } = this.props;

    if (!title) {
      Alert.alert("Mandatory", "Deck Name cannot be empty");
    } else {
      if (decks[title]) {
        Alert.alert(
          "Warning",
          "Deck Already exists. Please choose a different title."
        );
      } else {
        const deck = { title, questions: [] };
        // send this deck to store
        addDeck({ [deck.title]: deck });
        Alert.alert("Success", "Deck has been added.", [
          {
            text: "OK",
            onPress: () => navigation.navigate("DeckDetail", deck)
          }
        ]);
        // reset state
        this.setState({ title: "" });
      }
    }
  };

  render() {
    const { title } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter the title for your deck</Text>

        <TextInput
          value={title}
          style={styles.input}
          onChangeText={title => this.setState({ title })}
        />

        <Button
          onPress={this.newDeckHandler}
          title="Create"
          color="#4267b2"
          accessibilityLabel="Create new deck"
        />
      </View>
    );
  }
}

function mapStateToProps(decks) {
  return { decks };
}

export default connect(mapStateToProps, { addDeck })(NewDeck);
