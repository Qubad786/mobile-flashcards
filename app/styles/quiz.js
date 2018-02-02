import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  qaInner: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    margin: 30
  },
  btnGroup: {
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginTop: 10,
    width: 300
  }, 
  scoreText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#666666"
  },
  QATextStyle: {
    margin: 40,
    fontSize: 20,
    fontWeight: "bold",
    color: "#666666"
  },
  QAToggleStyle: {
    marginTop: 30,
    marginBottom: 40
  }
});
