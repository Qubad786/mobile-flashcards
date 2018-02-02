import { StyleSheet } from "react-native";

const deckDetailStyles = StyleSheet.create({
  containerStyle: {
    flex: 0.7
  },
  innerStyle: {
    margin: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  btnGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  titleStyle: {
    marginTop: 35,
    fontSize: 30,
    fontWeight: "bold",
    color: "#666666"
  },
  metaStyle: {
    marginBottom: 35,
    fontSize: 20,
    marginTop: 12,
    color: "#666666"
  },
  button: {
    marginTop: 10,
    width: 300
  }
});

export default deckDetailStyles;
