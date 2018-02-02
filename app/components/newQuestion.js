import React from "react";
import { connect } from "react-redux";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { addQuestion } from "../actions";
import { styles } from "../styles/newQuestion";

class NewQuestion extends React.Component {
  state = {
    question: "",
    answer: ""
  };

  addQuestionHandler = () => {
    const { title } = this.props.navigation.state.params;
    const { question, answer } = this.state;
    const { addQuestion, navigation } = this.props;

    if (question === "") {
      Alert.alert("Required", "Question cannot be empty");
      return;
    }

    if (answer === "") {
      Alert.alert("Required", "Answer cannot be empty");
      return;
    }

    // add card in the store
    addQuestion({ title, question, answer });

    Alert.alert("Successful", "Question has been added successfully!", [
      {
        text: "OK",
        onPress: () => navigation.goBack()
      }
    ]);
  };

  render() {
    const { question, answer } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          value={question}
          placeholder="Enter Question"
          style={styles.input}
          onChangeText={question => this.setState({ question })}
        />

        <TextInput
          value={answer}
          placeholder="Enter Answer"
          style={styles.input}
          onChangeText={answer => this.setState({ answer })}
        />

        <Button
          onPress={this.addQuestionHandler}
          title="Add to Deck"
          color="#4267b2"
          accessibilityLabel="Create new question"
        />
      </View>
    );
  }
}

function mapStateToProps(decks) {
  return { decks };
}

export default connect(mapStateToProps, { addQuestion })(NewQuestion);
