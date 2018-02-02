import { StyleSheet } from "react-native";

export const deckListItemStyles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    marginTop: 12,
    height: 80,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  innerStyle: {
    justifyContent: "center",
    alignItems: "center"
  },
  titleStyle: {
    fontSize: 20,
    color: "#666666",
    fontWeight: "bold"
  },
  metaStyle: {
    fontSize: 15,
    color: "#666666"
  }
});
