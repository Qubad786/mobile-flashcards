import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import DeckDetail from "./deckDetail";
import NewQuestion from "./newQuestion";
import DeckList from "./deckList";
import NewDeck from "./newDeck";
import Quiz from "./quiz";
import { FontAwesome } from "@expo/vector-icons";

const tabs = TabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: "All Decks"
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: "New Deck"
      }
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default (AppNavigator = StackNavigator({
  Home: {
    screen: tabs
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.state.params.title,
        headerTintColor: "#000",
        headerLeft: (
          <FontAwesome
            name="arrow-left"
            size={17}
            color="black"
            style={{ marginLeft: 20 }}
            onPress={() => navigation.navigate("DeckList")}
          />
        )
      };
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz",
      headerTintColor: "#000"
    }
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: "Add Question",
      headerTintColor: "#000"
    }
  }
}));
